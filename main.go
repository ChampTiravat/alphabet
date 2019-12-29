package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
)

type Response struct {
	Data string `json: data`
}

// procedural-oriented programming langauge
func handleIndex(w http.ResponseWriter, r *http.Request) {
	rawRes := &Response{Data: "hello, World!"}
	data, err := json.Marshal(&rawRes)
	if err != nil {
		log.Println(err)
	}

	if r.Method == "GET" {
		fmt.Fprintf(w, string(data))
	} else {
		fmt.Fprintf(w, "method not allowed")
	}
	return
}

func main() {
	http.HandleFunc("/", handleIndex)
	http.ListenAndServe(":9000", nil)
}