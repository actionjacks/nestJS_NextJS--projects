package main

import (
	"encoding/json"
	"net/http"
)

var ErrUserInvalid = apiError{Err: "user not valid", Status: http.StatusUnauthorized}

type apiError struct {
	Err    string
	Status int
}

type User struct {
	ID    int
	Valid bool
}

func (e apiError) Error() string {
	return e.Err
}

type apiFunc func(http.ResponseWriter, *http.Request) error

func makeHTTPHandler(fn apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := fn(w, r); err != nil {
			if e, ok := err.(apiError); ok {
				writeJSON(w, e.Status, e)
				return
			}
			writeJSON(w, http.StatusInternalServerError, apiError{Err: "internal server error", Status: http.StatusInternalServerError})
		}
	}
}

func handleGetUserById(w http.ResponseWriter, r *http.Request) error {
	if r.Method != http.MethodGet {
		return apiError{Err: "method not allowed", Status: http.StatusMethodNotAllowed}
	}

	user := User{ID: 1, Valid: false}
	if !user.Valid {
		return ErrUserInvalid
	}
	return writeJSON(w, http.StatusOK, user)
}

func writeJSON(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Add("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(v)
}

func main() {
	http.HandleFunc("/user", makeHTTPHandler(handleGetUserById))
	http.ListenAndServe(":3000", nil)
}
