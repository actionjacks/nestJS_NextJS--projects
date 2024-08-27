package main

import (
	"sync"
	"time"
)

var wg2 *sync.WaitGroup

func worker(wg *sync.WaitGroup) {
	defer wg.Done()

	time.Sleep(2 * time.Second)
	wg.Done()
}

func worker2(resch chan string) {
	time.Sleep(2 * time.Second)
	resch <- "work"
	wg2.Done()
}

func main() {
	var wg *sync.WaitGroup
	wg.Add(2)

	go worker(wg)
	go worker(wg)

	wg.Wait()

	// -----------------------------

	resultChan := make(chan string)

	wg2 = &sync.WaitGroup{}
	wg2.Add(3)

	go worker2(resultChan)
	go worker2(resultChan)
	go worker2(resultChan)

	go func() {
		for res := range resultChan {
			println(res)
		}
	}()

	wg2.Wait()
	close(resultChan)
}
