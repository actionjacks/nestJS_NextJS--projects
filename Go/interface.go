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
