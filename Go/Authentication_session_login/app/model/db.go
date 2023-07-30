package model

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var db *sql.DB

func Setup() {
	dsn := "host=127.0.0.1 port=5432 user=admin password=test dbname=postgres sslmode=disable"

	var err error

	db, err = sql.Open("postgres", dsn)

	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("DB connected")

	createTableQuery := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name VARCHAR(64) NOT NULL,
		email VARCHAR(64) NOT NULL UNIQUE,
		password TEXT NOT NULL
	);
	`

	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatalf("Error while creating the table: %v", err)
	}

	fmt.Println("The table 'users' has been created or already exists.")
}
