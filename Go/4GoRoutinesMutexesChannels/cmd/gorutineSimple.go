package main

import (
	"fmt"
	"sync"
	"time"
)

func fetchUser() string {
	time.Sleep(time.Millisecond * 100)
	return "user"
}

func FetchUserLikes(userName string, responseChanel chan any, wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(time.Millisecond * 150)
	responseChanel <- 11
}

func fetchUserMatch(userName string, responseChanel chan any, wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(time.Millisecond * 190)
	responseChanel <- "Jack"
}

func _main() {
	var wg = &sync.WaitGroup{}
	responseChanel := make(chan any, 2)

	wg.Add(2)
	go FetchUserLikes(fetchUser(), responseChanel, wg)
	go fetchUserMatch(fetchUser(), responseChanel, wg)
	wg.Wait()

	for resp := range responseChanel {
		fmt.Println(resp)
	}
}
