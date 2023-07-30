package main

import (
	"encoding/json"
	"fmt"
	"jck/internal/database"
	"net/http"
	"time"

	"github.com/google/uuid"
)

// http://localhost:8000/v1/users POST
func (apiConfig *apiConfig) handlerCreateUser(w http.ResponseWriter, r *http.Request) {
	type parameters struct {
		Name string `json:"name"`
	}
	decoder := json.NewDecoder(r.Body)

	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("Error parsing JSON %v", err))
		return
	}

	user, err := apiConfig.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID:        uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		Name:      params.Name,
	})
	if err != nil {
		respondWithError(w, 201, fmt.Sprintf("Couldn t create user %v", err))
		return
	}

	respondWithJSON(w, 200, databaseUserToUser(user))
}

// http://localhost:8000/v1/users GET
// Headers:
// { Authorization ApiKey 4e35316a13639d4006e6fb132cbe34559424758a218487ecf4364fe881dcddb9 } <-some user api_key
func (apiConfig *apiConfig) handlerGetUser(w http.ResponseWriter, r *http.Request, user database.User) {
	respondWithJSON(w, 200, databaseUserToUser(user))
}

func (apiConfig *apiConfig) handlerGetPostsForUser(w http.ResponseWriter, r *http.Request, user database.User) {
	posts, err := apiConfig.DB.GetPostsForUser(r.Context(), database.GetPostsForUserParams{
		UserID: user.ID,
		Limit:  10,
	})
	if err != nil {
		respondWithError(w, 201, fmt.Sprintf("Couldn t get users posts %v", err))
		return
	}

	respondWithJSON(w, 200, databsePostsToPosts(posts))
}
