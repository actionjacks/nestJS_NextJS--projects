package main

import (
	"jwt/controllers"
	"jwt/initializers"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}

func main() {
	// ROUTING
	response := gin.Default()
	response.GET("/api", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "running",
		})
	})

	response.POST("/api/signup", controllers.Signup)
	response.POST("/api/login", controllers.Login)
	response.GET("/validate", controllers.Validate)

	response.Run()
}
