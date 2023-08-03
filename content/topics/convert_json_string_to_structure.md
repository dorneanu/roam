+++
title = "Convert JSON string to structure"
draft = false
+++

```text
package main

import (
    "fmt"
     "encoding/json"
)

// Field is a key value structure
type Field struct {
    name string
    value string
}

func main() {
    fields := []Field{}
    jsonStr := `[
        {"a": "alles klar", "b": "c", "d": "1"},
        {"key": "value"}
    ]`
    data := []map[string]interface{}{}

    // Convert json string to list of map[string]interface{}
    err := json.Unmarshal([]byte(jsonStr), &data)
    if err != nil {
        panic(err)
    }

    for _, v := range data {
        // Keys contains available keys in current map
        keys := make([]string, 0, len(v))

        // Copy keys
        for k := range v {
            keys = append(keys, k)
        }

        for _, key := range keys {
            field := Field {
                name: key,
                value: fmt.Sprintf("%s", v[key].(string)),
            }

            fields = append(fields, field)
        }
    }

    for _, f := range fields {
        fmt.Printf("%#v\n", f)
    }

}
```

-   [Go Playground](https://play.golang.org/p/cMutpCzpmth)
