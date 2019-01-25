package main

import (
	"fmt"
	"log"
	"net/http"
)

const (
	serverPort string = ":9000"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		fmt.Fprintf(w, "ok")
		return
	}
	fmt.Fprintf(w, "Method Not Allowed")
	return
}

func main() {
	log.Printf("API Server Started at http://0.0.0.0:%s\n", serverPort)
	http.HandleFunc("/", rootHandler)
	http.ListenAndServe(serverPort, nil)
}
