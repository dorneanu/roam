package main

import (
	"bufio"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	listFile := flag.String("f", "", "File containing list of basenames to delete (one per line)")
	dryRun := flag.Bool("dry-run", false, "Show what would be deleted without actually deleting")
	rootDir := flag.String("root", "", "Root directory to search from (defaults to current directory)")
	flag.Parse()

	if *listFile == "" {
		fmt.Println("Usage: delete-files -f <file-list> [-root <directory>] [-dry-run]")
		fmt.Println("  -f string")
		fmt.Println("        File containing list of basenames to delete (one per line)")
		fmt.Println("  -root string")
		fmt.Println("        Root directory to search from (defaults to current directory)")
		fmt.Println("  -dry-run")
		fmt.Println("        Show what would be deleted without actually deleting")
		os.Exit(1)
	}

	// Read the list file
	file, err := os.Open(*listFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error opening file list: %v\n", err)
		os.Exit(1)
	}
	defer file.Close()

	var basenames []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line != "" && !strings.HasPrefix(line, "#") {
			// Remove extension if present
			basename := strings.TrimSuffix(line, ".md")
			basename = strings.TrimSuffix(basename, ".org")
			basenames = append(basenames, basename)
		}
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintf(os.Stderr, "Error reading file list: %v\n", err)
		os.Exit(1)
	}

	// Get root directory
	cwd := *rootDir
	if cwd == "" {
		var err error
		cwd, err = os.Getwd()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error getting working directory: %v\n", err)
			os.Exit(1)
		}
	}

	// Find and delete files
	var deletedCount int
	var errors []string

	for _, basename := range basenames {
		// Search for .md files
		mdFiles, _ := filepath.Glob(filepath.Join(cwd, "content", "topics", basename+".md"))

		// Search for .org files
		orgFiles, _ := filepath.Glob(filepath.Join(cwd, "org", "topics", basename+".org"))

		allFiles := append(mdFiles, orgFiles...)

		for _, file := range allFiles {
			if *dryRun {
				fmt.Printf("[DRY RUN] Would delete: %s\n", file)
				deletedCount++
			} else {
				if err := os.Remove(file); err != nil {
					errors = append(errors, fmt.Sprintf("Failed to delete %s: %v", file, err))
				} else {
					fmt.Printf("Deleted: %s\n", file)
					deletedCount++
				}
			}
		}
	}

	fmt.Printf("\n")
	if *dryRun {
		fmt.Printf("Would delete %d files\n", deletedCount)
	} else {
		fmt.Printf("Successfully deleted %d files\n", deletedCount)
	}

	if len(errors) > 0 {
		fmt.Fprintf(os.Stderr, "\nErrors:\n")
		for _, err := range errors {
			fmt.Fprintf(os.Stderr, "  %s\n", err)
		}
		os.Exit(1)
	}
}
