package main

import (
	"context"
	"encoding/json"
	"net/http"
)

type ApiServer struct {
	svc Service
}

func NewApiServer(svc Service) *ApiServer {
	return &ApiServer{
		svc: svc,
	}
}

func (a *ApiServer) Start(listenAddr string) error {
	http.HandleFunc("/", a.handleGetCatFact)

	return http.ListenAndServe(listenAddr, nil)
}

func (a *ApiServer) handleGetCatFact(w http.ResponseWriter, r *http.Request) {
	fact, err := a.svc.GetCatFact(context.Background())
	if err != nil {
		writeJSON(w, http.StatusUnprocessableEntity, map[string]any{"error": err.Error()})
		return
	}

	writeJSON(w, http.StatusOK, fact)
}

func writeJSON(w http.ResponseWriter, s int, v any) error {
	w.WriteHeader(s)
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(v)
}
