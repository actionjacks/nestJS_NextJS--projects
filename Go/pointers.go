package main

/* POINTERS
& - ADRESSS
* - VALUE

WE PASS ADDRESS TO THE FUNCTION.
IN THE FUNCTION, WE REFER TO THE VALUES THAT WE CAN CHANGE
*/

import "fmt"

func updateName(x *string) {
	*x = "LoooL"
}

func main2() {
	name := "jacek"

	fmt.Println("memory addres", &name) //0x032450
	myPointer := &name                  //0x032450
	fmt.Println("value", *myPointer)    //"jacek"

	updateName(myPointer)
	fmt.Println(name) //"LoooL"
}
