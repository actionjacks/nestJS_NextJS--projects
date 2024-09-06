package main

import (
	"fmt"
	"jackapi/config"
	"jackapi/db"
	"jackapi/handlers"
	"jackapi/middlewares"
	"jackapi/repositories"
	"jackapi/services"

	"github.com/gofiber/fiber/v2"
)

func main() {
	envConfig := config.NewEnvConfig()
	db := db.Init(envConfig, db.DBMigrator)

	app := fiber.New(fiber.Config{
		AppName:      "Jack API",
		ServerHeader: "Jack API",
	})
	// Repositories
	eventRepository := repositories.NewEventRepository(db)
	ticketRepository := repositories.NewTicketRepository(db)
	authRepository := repositories.NewAuthRepository(db)

	// Service
	authService := services.NewAuthService(authRepository)

	// Routing
	server := app.Group("/api")
	handlers.NewAuthHandler(server.Group("/auth"), authService)

	privateRoutes := server.Use(middlewares.AuthProtected(db))

	// Handlers
	handlers.NewEventsHandler(privateRoutes.Group("/events"), eventRepository)
	handlers.NewTicketHandler(privateRoutes.Group("/tickets"), ticketRepository)

	app.Listen(fmt.Sprintf(":" + envConfig.ServerPort))
}
