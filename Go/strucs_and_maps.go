package main

import "fmt"

type Product struct {
	id       string
	name     string
	price    float64
	category string
}

func (product *Product) returnInfo() string {
	info := fmt.Sprintf("\nid:\t %v\nname:\t %v\nprice:\t %v\ncategory:\t %v",
		product.id, product.name, product.price, product.category)

	fmt.Println(info)
	return info
}

/*
		map[string]int jest mapą, która ma klucze typu string i wartości typu int
		myMap := map[string]int{
	        "apple":  10,
	        "banana": 5,
	        "orange": 8,
	    }
*/
func createMap(products []Product) map[string]int {
	invMap := make(map[string]int) // make w języku Go służy do inicjalizacji dynamicznych typów, takich jak mapy, slice'y i kanały.

	for _, product := range products {
		product.returnInfo()

		/*
			Zmienna key_value przechowuje wartość, która została pobrana z mapy invMap na podstawie klucza product.category (lub wartość domyślną, jeśli klucz nie istnieje w mapie).
			Zmienna key_exist przechowuje wartość logiczną (true lub false) wskazującą, czy klucz product.category istnieje w mapie invMap.
			Dzięki temu, używając jednego wyrażenia, możemy jednocześnie uzyskać wartość z mapy i sprawdzić, czy klucz istnieje. Jest to wygodna i popularna technika w Go, która pozwala na bardziej czytelny i skondensowany kod.
		*/

		if key_value, key_exist := invMap[product.category]; key_exist {
			println(key_value)
			invMap[product.category] += 1
		} else {
			invMap[product.category] = 1
		}
	}
	return invMap
}
