+++
title = "Convert JSON string to map[string]interface{}"
draft = false
+++

```text
      // json string
    jsonStr := `{
        "Name": "noknow",
        "Age": 2,
        "Admin": true,
        "Hobbies": ["IT","Travel"],
        "Address": {
            "PostalCode": 1111,
            "Country": "Japan"
        },
        "Null": null
    }`

    // Convert json string to map[string]interface{}
    var mapData map[string]interface{}
    if err := json.Unmarshal([]byte(jsonStr), &mapData); err != nil {
        fmt.Println(err)
    }
```
