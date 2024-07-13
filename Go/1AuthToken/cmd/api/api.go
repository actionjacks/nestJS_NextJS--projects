package api

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gorilla/mux"

	"jackmodule/services/cart"
	"jackmodule/services/order"
	"jackmodule/services/product"
	"jackmodule/services/user"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{
		addr: addr,
		db:   db,
	}
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	// register routes
	userStore := user.NewStore(s.db)
	userHandler := user.NewHandler(userStore)
	userHandler.RegisterRoutes(subrouter)

	productStore := product.NewStore(s.db)
	productHandler := product.NewHandler(productStore, userStore)
	productHandler.RegisterRoutes(subrouter)

	orderStore := order.NewStore(s.db)

	cartHandler := cart.NewHandler(productStore, orderStore, userStore)
	cartHandler.RegisterRoutes(subrouter)

	router.PathPrefix("/").Handler(http.FileServer(http.Dir("static"))) // Serve static files

	log.Println("Listening on", s.addr)

	return http.ListenAndServe(s.addr, router)
}
