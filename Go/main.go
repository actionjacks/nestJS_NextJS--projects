package main

import (
	"fmt"
	"math"
	"sort"
	"strings"
)

// FUNCTIONS
func printerFo(value string) {
	fmt.Println(value)
}

func printerFo2(arr []string, call func(string)) {
	for _, value := range arr {
		call(value)
	}
}

func circleArea(cyrcleNum float64) float64 {
	return math.Pi * cyrcleNum * cyrcleNum
}

func multipleRetur(myString string) (string, string) {
	uppper := strings.ToUpper((myString))
	names := strings.Split(uppper, " ")

	// get first char
	var initials []string
	for _, char := range names {
		initials = append(initials, char[:1]) // ADD first letter
	}

	return names[0], names[1]
}

func main() {
	// FROM IMPORT
	hello_("--------------")

	// multiple returns
	first, second := multipleRetur("lorem doro")
	fmt.Println(first, second)

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

	string_to_search := "lorem12loremrlorem"
	//https://pkg.go.dev/strings
	fmt.Println(strings.Contains(string_to_search, "12")) // search and print result
	fmt.Println(strings.ReplaceAll(string_to_search, "12", "99"))

	myArrayToSort := []int{4, 5, 78, 12, 1, 4, 3, 3, 3, 55, 65}
	sort.Ints(myArrayToSort)

	fmt.Println(myArrayToSort)

	// LOOOPS
	x := 0
	for x < 5 {
		fmt.Print(x)
		x++
	}

	for i := 0; i < 5; i++ {
		fmt.Print(i)
	}

	mySlices := []string{"1a", "23a", "34", "3a", "43a"}

	for i := 0; i < len(mySlices); i++ {
		fmt.Println(mySlices[i])
	}

	for index, value := range mySlices {
		fmt.Println(index, "=======", value)
	}
	// or
	for _, value := range mySlices {
		fmt.Println("=======", value)
	}

	printerFo("foo")

	printerFo2(mySlices, printerFo)

	// MAPS
	menu := map[string]float64{
		"fo":  1.2,
		"fo2": 2.2,
		"fo3": 3.3,
	}

	fmt.Println(menu)
	fmt.Println(menu["fo"])

	for key, value := range menu {
		fmt.Println(key)
		fmt.Println(value)
	}
}
