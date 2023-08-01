package main

import "fmt"

type myCustomStruck struct {
	name  string
	items map[string]float64
	tip   float64
}

// łaczenie funkcji z 'struct'
func (b myCustomStruck) format() string {
	value := "lorem"

	b.items[value] = 1.2

	for k, v := range b.items {
		fmt.Println(k, "---", v)
	}

	return value
}

// uzywam pointera zeby zaktualizowac wartosc w obiekcie
func (b *myCustomStruck) updateTip(newValue float64) {
	// (*b).tip += newValue
	b.tip += newValue
}

func fobar(name string) myCustomStruck {
	value := myCustomStruck{
		name:  name,
		items: map[string]float64{},
		tip:   2.2,
	}
	return value
}

type Person struct {
	Name string
	Age  int
}

func main3() {
	mymy := fobar("lorem")
	mymy.format()
	mymy.updateTip(2.2)

	fmt.Println(mymy.name, mymy.tip, mymy.items)

	person := Person{
		Name: "John Doe",
		Age:  30,
	}
	fmt.Println(person)
}

func foooooooobar() {

	// ANonymous struct
	fobar := struct {
		Make  string
		Model string
	}{
		Make:  "fobar1",
		Model: "fobar2",
	}

	type orSomeStruct struct {
		Make  string
		Model string
		Wheel struct {
			Radius int
		}
	}

	fmt.Println(fobar.Make)
}
