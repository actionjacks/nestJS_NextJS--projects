package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

var client *http.Client

type CatFact struct {
	Fact   string `json:"fact"`
	Length int    `json:"length"`
}

type RandomUser struct {
	Results []UserResult
}

type UserResult struct {
	Name    UserName
	Email   string
	Picture UserPicture
}

type UserName struct {
	Title string
	First string
	Last  string
}

type UserPicture struct {
	Large     string
	Medium    string
	Thumbnail string
}

type CatFactsCollection struct {
	Facts []CatFact `json:"facts"`
}

func GetCatFactSaveToTxt() {
	url := "https://catfact.ninja/fact"

	var catFact CatFact

	err := GetJson(url, &catFact)
	if err != nil {
		fmt.Printf("error getting cat fact: %s\n", err.Error())
		return
	}
	fmt.Printf("A super interesting Cat Fact: %s\n", catFact.Fact)

	file, err := os.Create("cat_fact.txt")
	if err != nil {
		fmt.Printf("error creating file: %s", err.Error())
		return
	}
	defer file.Close()

	jsonBytes, err := json.Marshal(catFact)
	if err != nil {
		fmt.Printf("error creating file: %s", err.Error())
		return
	}

	_, err = file.Write(jsonBytes)
	if err != nil {
		fmt.Printf("error creating file: %s", err.Error())
		return
	}
}

func GetCatFactAndAppendToJson() {
	url := "https://catfact.ninja/fact"

	var catFact CatFact

	err := GetJson(url, &catFact)
	if err != nil {
		fmt.Printf("error getting cat fact: %s\n", err.Error())
		return
	}
	fmt.Printf("A super interesting Cat Fact: %s\n", catFact.Fact)

	AppendToJsonFile(catFact)
}

func AppendToJsonFile(catFact CatFact) {
	// Open or create the file "cat_fact.json" in writable mode
	file, err := os.OpenFile("cat_fact.json", os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		fmt.Printf("error opening file: %s", err.Error())
		return
	}
	defer file.Close()

	// Read file content (if exists)
	fileContent, err := os.ReadFile("cat_fact.json")
	if err != nil {
		// Jeśli plik nie istnieje, utwórz nową kolekcję faktów
		fileContent = []byte(`{"facts": []}`)
	}

	var factsCollection CatFactsCollection
	err = json.Unmarshal(fileContent, &factsCollection)
	if err != nil {
		// Ignore the deserialization error if the file is empty or does not contain valid JSON
	}

	// Add a new fact to the collection
	factsCollection.Facts = append(factsCollection.Facts, catFact)

	// Replace the collection with JSON
	jsonBytes, err := json.MarshalIndent(factsCollection, "", "  ")
	if err != nil {
		fmt.Printf("error creating JSON: %s", err.Error())
		return
	}

	// Save JSON to a file
	err = os.WriteFile("cat_fact.json", jsonBytes, 0644)
	if err != nil {
		fmt.Printf("error writing to file: %s", err.Error())
		return
	}
}

func GetRandomUser() {
	url := "https://randomuser.me/api/"

	var user RandomUser

	err := GetJson(url, &user)

	if err != nil {
		fmt.Printf("error getting json: %s\n", err.Error())
	} else {
		fmt.Printf("User: %s %s %s\nEmail: %s\nThumbnail: %s",
			user.Results[0].Name.Title,
			user.Results[0].Name.First,
			user.Results[0].Name.Last,
			user.Results[0].Email,
			user.Results[0].Picture.Thumbnail,
		)
	}
}

func GetJson(url string, target interface{}) error {
	resp, err := client.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	return json.NewDecoder(resp.Body).Decode(target)
}

func main() {
	client = &http.Client{Timeout: 10 * time.Second}

	GetCatFactSaveToTxt()
	GetCatFactAndAppendToJson()
	// GetRandomUser()

	// catFact := CatFact {
	// 	Fact: "A random cat fact",
	// 	Length: 17,
	// }

	// jsonStr, err := json.Marshal(catFact)
	// if err != nil {
	// 	fmt.Printf("error marshaling: %s\n", err.Error())
	// } else {
	// 	fmt.Printf("Test JSON: %s\n", string(jsonStr))
	// }

}
