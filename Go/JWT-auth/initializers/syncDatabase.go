package initializers

import "jwt/models"

// migration

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
}
