package main

import "fmt"

type Database interface {
	GetUser() string
}

type DefaultDatabse struct{}

func (db DefaultDatabse) GetUser() string {
	return "User"
}

type Greeter interface {
	Greet(userName string)
}

type NiceGreeter struct{}

func (ng NiceGreeter) Greet(userName string) {
	fmt.Println("Hello", userName)
}

type Program struct {
	db Database
	g  Greeter
}

func main4() {
	db := DefaultDatabse{}
	g := NiceGreeter{}
	program := Program{
		db: db,
		g:  g,
	}

	program.g.Greet(program.db.GetUser())
}
