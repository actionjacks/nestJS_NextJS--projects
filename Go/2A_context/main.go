package main

import (
	"context"
	"fmt"
	"time"
)

type Response struct {
	value int
	err   error
}

func main() {
	start := time.Now()
	//ctx := context.Background()

	ctx := context.WithValue(context.Background(), "key", "value")
	userID := 1
	val, err := fetchUserData(ctx, userID)
	if err != nil {
		panic(err)
	}
	elapsed := time.Since(start)
	fmt.Printf("value: %d, elapsed: %s\n", val, elapsed)
}

func fetchUserData(ctx context.Context, userID int) (int, error) {
	val := ctx.Value("key")
	fmt.Println(val)

	ctx, cancel := context.WithTimeout(ctx, time.Millisecond*200)
	defer cancel()

	respch := make(chan Response)

	go func() {
		val, err := fetchThirdPartyDataCanBeSlow()
		respch <- Response{
			value: val,
			err:   err,
		}
	}()

	for {
		select {
		case <-ctx.Done():
			return 0, fmt.Errorf("fetching data from third party took too long")
		case resp := <-respch:
			return resp.value, resp.err
		}
	}
}

func fetchThirdPartyDataCanBeSlow() (int, error) {
	time.Sleep(time.Millisecond * 100)
	return 204, nil
}
