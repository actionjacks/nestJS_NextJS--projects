package main

import "fmt"

func main() {
	// variables
	var nameOne string = "fooo"
	var inferType = "foo2"
	noVatneeded := "foo3" // cant use outside function

	/*
		var myInt int = 12
		var myInt2 = 12
		myInt3 := 12
		var myFlot = 2.2
		myFlot2 := 2.3434
	*/

	fmt.Println("Elo")
	fmt.Println(nameOne)
	fmt.Println(inferType)
	fmt.Println(noVatneeded)
	fmt.Print("no new line")

	myFlot2 := 2.3434

	fmt.Println("lorem lorem", myFlot2)

	fmt.Printf("Age: %v\n", myFlot2) // %v zostanie zastapione zmienna innego typu jak string

	fmt.Printf("print type: %T\n", myFlot2)

	fmt.Printf("print precision: %0.1f\n", myFlot2)

	var storedConsol = fmt.Sprintf("llllllllllllll")
	fmt.Println(storedConsol)

	// Array
	var myFirstArray [3]int = [3]int{20, 20, 1}

	name_ := [3]string{"1", "2", "3"}
	name_[0] = "99"

	fmt.Println("lorem lorem", myFirstArray, len(myFirstArray), name_)

	// slices (use array under the hood)
	var scores = []int{10, 2, 2}
	scores = append(scores, 12)

	// slice ranges
	rangeOne := name_[0:2]

	fmt.Println(len(scores), rangeOne)
}
