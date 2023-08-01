package main

import (
	"restapi/controller"
	"restapi/model"
)

func main() {
	model.Init()
	controller.Start()
}
