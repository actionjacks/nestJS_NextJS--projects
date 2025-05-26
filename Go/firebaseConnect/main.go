package main

import (
	"context"
	"log"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

func main() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("serviceAccountKey.json")
	log.Printf("Typ opt: %T, wartość: %+v\n", opt, opt)

	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		return
	}

	client, err := app.Firestore(ctx) // Przykład: inicjalizacja klienta Firestore
	if err != nil {
		log.Fatalf("Błąd Firestore: %v\n", err)
	}
	defer client.Close()

	_, err = client.Collection("users").Doc("user1").Set(ctx, map[string]interface{}{ // Zapis dokumentu
		"name":  "Jan",
		"email": "jan@example.com",
	})
	if err != nil {
		log.Fatalf("Błąd zapisu do Firestore: %v\n", err)
	}
	log.Println("Zapisano dane do Firestore!")

	doc, err := client.Collection("users").Doc("user1").Get(ctx) // Odczyt dokumentu i wypisanie jego zawartości
	if err != nil {
		log.Fatalf("Błąd odczytu dokumentu: %v\n", err)
	}

	data := doc.Data()
	log.Printf("Zawartość dokumentu: %+v\n", data)
}
