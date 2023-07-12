package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type Player struct {
	Name string
	Age  int
}

func helperReader(propmt string, reader *bufio.Reader) (string, error) {
	fmt.Print(propmt)

	name, error := reader.ReadString('\n')

	return strings.TrimSpace(name), error
}

func createPlayer() Player {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Create a new player")

	name, _ := reader.ReadString('\n') // press enter return name and error (_)
	name = strings.TrimSpace(name)     // trim white spaces

	newPlayer := Player{
		Name: name,
		Age:  30,
	}

	return newPlayer
}

func main4() {
	myPlayer := createPlayer()
	fmt.Print(myPlayer)

	myReader := bufio.NewReader(os.Stdin)
	name, _ := helperReader("lotem lorme", myReader)
	fmt.Print(name)
}
