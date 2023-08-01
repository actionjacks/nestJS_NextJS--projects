package main

import "fmt"

// Definicja interfejsu
type Shape interface {
	Area() float64
	Perimeter() float64
}

// Definicja struktury implementującej interfejs
type Rectangle struct {
	Width  float64
	Height float64
}

// Implementacja metod interfejsu dla struktury Rectangle
func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
	return 2 * (r.Width + r.Height)
}

// Funkcja przyjmująca interfejs jako argument
func PrintMeasurements(s Shape) {
	fmt.Printf("Area: %.2f\n", s.Area())
	fmt.Printf("Perimeter: %.2f\n", s.Perimeter())
}

func main55() {
	rectangle := Rectangle{
		Width:  3,
		Height: 4}

	PrintMeasurements(rectangle)
}

// GENERIC

// Struktura stosu implementująca generyczny interfejs Container
type Stack[T any] struct {
	data []T
}

// Implementacja metod dla Stack
func (s *Stack[T]) Push(item T) {
	s.data = append(s.data, item)
}

// Generyczna funkcja do wyszukiwania indeksu pierwszego wystąpienia danego elementu w tablicy
func findIndex[T comparable](arr []T, elem T) int { // comparable Pozwala ono na wyrażenie wymogu, że parametr typu musi być porównywalny.
	for i, v := range arr {
		if v == elem {
			return i
		}
	}
	return -1
}

func checkType(v interface{}) {
	switch v.(type) {
	case string:
		fmt.Println("To jest zmienna typu string.")
	default:
		fmt.Println("To nie jest zmienna typu string.")
	}
}

func fofofo212() {
	// Utworzenie stosu przechowującego int
	intStack := &Stack[int]{}
	intStack.Push(1)
	intStack.Push(2)
	intStack.Push(3)

	intSlice := []int{1, 2, 3, 4, 5}
	index := findIndex(intSlice, 3)
	fmt.Println("Index of 3 in intSlice:", index) // wynik: 2

	// -----------------------------------------
	var str string = "Hello, Go!"
	var num int = 42

	checkType(str) // To jest zmienna typu string.
	checkType(num) // To nie jest zmienna typu string.
}
