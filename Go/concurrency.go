package main

//gorutynami (concurrency)
// wykonywanie kodu jednoczesnie kozystajac z rdzenie procesora

import (
	"fmt"
	"sync"
	"time"
)

// go doSomething
// go <- keyworrd

func sendEmail(message string) {
	go func() {
		time.Sleep(time.Microsecond * 250)
		fmt.Printf("Email recived %s", message)
	}()
	fmt.Printf("Email send '%s'", message)
}

func worker(ch chan int) {
	for i := 0; i < 5; i++ {
		ch <- i // Wysyła wartość 'i' do kanału 'ch'
	}
	close(ch) // Zamyka kanał po zakończeniu pracy gorutyny
}

func fofofo() {
	ch2 := make(chan int) // Tworzy kanał do przesyłania wartości typu int
	go worker(ch2)        // Uruchamia gorutynę, która wysyła dane do kanału

	// Odbiera dane z kanału
	for value := range ch2 {
		fmt.Println("Received:", value)
	}
	/*
		W powyższym przykładzie tworzony jest kanał, a następnie uruchamiana jest gorutyna,
		która wysyła liczby od 0 do 4 do tego kanału. W głównej funkcji (w funkcji main)
		następuje odbieranie tych liczb z kanału i wypisywanie ich na konsolę. Gdy gorutyna zakończy swoje działanie i wyśle wszystkie dane,
		kanał zostanie automatycznie zamknięty przy użyciu funkcji close(ch), co spowoduje zakończenie pętli odbierającej dane.
	*/

	// -----------------------
	ch := make(chan int) // Kanał do przesyłania wartości typu int
	ch <- 42             // Wysyła wartość 42 do kanału 'ch'
	value := <-ch        // Przypisuje wartość odebraną z kanału 'ch' do zmiennej 'value'
	fmt.Printf(fmt.Sprint(value))
}

// -----------------------

var counter int
var mu sync.Mutex

func increment() {
	mu.Lock()
	defer mu.Unlock()
	counter++
}

func mainfofofo2() {
	var wg sync.WaitGroup
	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() {
			increment()
			wg.Done()
		}()
	}
	wg.Wait()

	fmt.Println("Counter value:", counter)
}

/*
W powyższym przykładzie zastosowano mutex, aby bezpiecznie zwiększyć wartość counter przez wiele gorutyn. Dzięki temu można uniknąć błędów związanych z równoczesnym dostępem do counter przez różne gorutyny i zagwarantować, że wynik będzie poprawny.
*/
