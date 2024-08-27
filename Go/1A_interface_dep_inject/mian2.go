package main

import (
	"fmt"
)

type Oven interface {
	Heat() string
}

type Ingredient interface {
	Mix() string
}

type GasOven struct{}

func (gasOven GasOven) Heat() string {
	return "Heating whit Gas OVen!"
}

type ElectricOven struct{}

func (electricOven ElectricOven) Heat() string {
	return "Heating whit Electric OVen!"
}

type Flour struct{}

func (flour Flour) Mix() string {
	return "Mixing with flour!"
}

type Sugar struct{}

func (sugar Sugar) Mix() string {
	return "Mixing with sugar!"
}

type Butter struct{}

func (butter Butter) Mix() string {
	return "Mixing with butter!"
}

type Bakery struct {
	oven        Oven
	ingredients []Ingredient
}

func (b Bakery) Bake() {
	fmt.Println(b.oven.Heat())

	for _, ingredient := range b.ingredients {
		fmt.Println(ingredient.Mix())
	}

	fmt.Println("Baking!")
}

func main2() {
	gasOven := GasOven{}
	electricOven := ElectricOven{}
	flour := Flour{}
	sugar := Sugar{}
	butter := Butter{}

	bakery := Bakery{
		oven:        gasOven,
		ingredients: []Ingredient{flour, sugar, butter},
	}

	fmt.Println(electricOven, bakery)
}
