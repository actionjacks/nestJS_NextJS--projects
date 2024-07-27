package main

import (
	"log"
)

func main() {
	service := NewCatFactService("https://catfact.ninja/fact")
	service = NewLoggingService(service)

	ApiServer := NewApiServer(service)
	log.Fatal(ApiServer.Start(":3000"))
	// fact, err := service.GetCatFact(context.TODO())

	// if err != nil {
	// 	panic(err)
	// }

	// fmt.Println(fact.Fact)
}
