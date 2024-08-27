package main

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
)

type response struct {
	Price float64 `json:"price"`
	Link  string  `json:"link"`
}

func main() {
	ctx := context.Background()
	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, "https://some.api.com", nil)
	if err != nil {
		panic(err)
	}

	res, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	var typeResponse response
	if err := json.NewDecoder(res.Body).Decode(&typeResponse); err != nil {
		panic(err)
	}

	println(typeResponse)
}
