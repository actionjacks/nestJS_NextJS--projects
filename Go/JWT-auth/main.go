package main

import (
	"jwt/initializers"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
}

func main() {
	response := gin.Default()
	response.GET("/api", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "running",
		})
	})
	response.Run()
}
