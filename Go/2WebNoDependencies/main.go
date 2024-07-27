package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"sync"
)

type User struct {
	Name string `json:"name"`
} //user := User{Name: "Alice"}
var userCache = make(map[int]User)

var cacheMutex = sync.Mutex{} // sync.Mutex{} is a struct that implements the Mutex interface

// add userCache[1] = User{Name: "Alice"}
// get user := userCache[1]
//loop
// for id, user := range userCache {
// 	fmt.Printf("ID: %d, Name: %s\n", id, user.Name)
// }

func main() {
	mux := http.NewServeMux()
	// routes
	mux.HandleFunc("/", handleRooot)
	mux.HandleFunc("POST /users", createUser)
	mux.HandleFunc("GET /users/{id}", getUser)
	mux.HandleFunc("DELETE /users/{id}", deleteUser)
	// mux.HandleFunc("PUT /users/{id}", updateUser)

	fmt.Println("Listening on port 8080")
	http.ListenAndServe(":8080", mux)
}

func handleRooot(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!"))
	fmt.Fprint(w, "Hello, World!")
}

func createUser(w http.ResponseWriter, r *http.Request) {
	var user User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		handleError(w, err)
		return
	}

	if user.Name == "" {
		handleError(w, fmt.Errorf("Name is required"))
		return
	}

	cacheMutex.Lock()
	userCache[len(userCache)+1] = user
	cacheMutex.Unlock()

	w.WriteHeader(http.StatusCreated)
}

func getUser(w http.ResponseWriter, r *http.Request) {
	// id := r.URL.Query().Get("id")
	// if id == "" {
	// 	handleError(w, fmt.Errorf("ID is required"))
	// 	return
	// }

	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		handleError(w, fmt.Errorf("ID is not a number"))
		return
	}

	cacheMutex.Lock()
	user, ok := userCache[id]
	cacheMutex.Unlock()

	if !ok {
		handleError(w, fmt.Errorf("User not found"))
		return
	}

	j, err := json.Marshal(user)
	if err != nil {
		handleError(w, err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
	// json.NewEncoder(w).Encode(user)
}

func deleteUser(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		handleError(w, fmt.Errorf("ID is not a number"))
		return
	}

	cacheMutex.Lock()
	delete(userCache, id)
	cacheMutex.Unlock()

	w.WriteHeader(http.StatusOK)
}

func handleError(w http.ResponseWriter, err error) {
	http.Error(w, err.Error(), http.StatusBadRequest)
}
