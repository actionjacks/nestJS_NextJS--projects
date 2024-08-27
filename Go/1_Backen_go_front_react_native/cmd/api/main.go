package main

import (
	"fmt"
	"jackapi/config"
	"jackapi/db"
	"jackapi/handlers"
	"jackapi/repositories"

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

	//Routing
	server := app.Group("/api")

	//Handlers
	handlers.NewEventsHandler(server.Group("/events"), eventRepository)

	app.Listen(fmt.Sprintf(":" + envConfig.ServerPort))
}
