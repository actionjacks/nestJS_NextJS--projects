package main

import (
	"encoding/xml"
	"io"
	"net/http"
	"time"
)

type RSSFeed struct {
	Channel struct {
		Title       string    `xml:"title"`
		Link        string    `xml:"link"`
		Description string    `xml:"description"`
		Language    string    `xml:"language"`
		Item        []RSSItem `xml:"item"`
	} `xml:"channel"`
}

type RSSItem struct {
	Title       string `xml:"title"`
	Link        string `xml:"link"`
	Description string `xml:"description"`
	PubData     string `xml:"pubData"`
}

/*
http.Client: Tworzy nowego klienta HTTP, który będzie używany do wykonywania żądań HTTP.
http.Client.Timeout: Ustawia limit czasu na 10 sekund dla żądania HTTP. Oznacza to, że jeśli pobieranie danych z URL zajmie więcej niż 10 sekund, to operacja zostanie przerwana.
httpClient.Get(url): Wykonuje żądanie GET do podanego URL i zwraca odpowiedź HTTP.
io.ReadAll(resp.Body): Odczytuje całą zawartość odpowiedzi HTTP (czyli dane w formacie XML) do zmiennej dat.
xml.Unmarshal(dat, &rssFeed): Parsuje dane XML zawarte w dat i zapisuje je w strukturze rssFeed.
*/
func urlToFeed(url string) (RSSFeed, error) {
	httpClient := http.Client{
		Timeout: 10 * time.Second,
	}
	resp, err := httpClient.Get(url)
	if err != nil {
		return RSSFeed{}, err
	}
	defer resp.Body.Close()

	dat, err := io.ReadAll(resp.Body)
	if err != nil {
		return RSSFeed{}, err
	}
	rssFeed := RSSFeed{}

	err = xml.Unmarshal(dat, &rssFeed)
	if err != nil {
		return RSSFeed{}, err
	}
	return rssFeed, nil
}
