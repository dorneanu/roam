package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type Item struct {
	Start   string `json:"start"`
	StartMs int    `json:"start_ms"`
	End     string `json:"end"`
	EndMs   int    `json:"end_ms"`
	Speaker string `json:"speaker"`
	Voice   string `json:"voice"`
	Text    string `json:"text"`
}

func main() {
	// Check if the file path is provided as a command-line argument
	if len(os.Args) < 2 {
		fmt.Println("Please provide the JSON file path as a command-line argument.")
		return
	}

	filePath := os.Args[1]

	// Read the JSON file
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		fmt.Println("Error reading JSON file:", err)
		return
	}

	var items []Item
	err = json.Unmarshal(data, &items)
	if err != nil {
		fmt.Println("Error parsing JSON:", err)
		return
	}

	prevVoice := ""
	for _, item := range items {
		if item.Voice != prevVoice {
			// Print a double newline if the voice attribute changes
			fmt.Println("\n\n", item.Voice)
			prevVoice = item.Voice
		} else {
			// Print the text attribute without a newline
			fmt.Print(" ")
		}
		fmt.Print(item.Text)
	}

	fmt.Println() // Print a newline at the end
}
