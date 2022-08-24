+++
title = "httptest test server"
draft = false
+++

-   <http://hassansin.github.io/Unit-Testing-http-client-in-Go>
-   <https://stackoverflow.com/questions/16154999/how-to-test-http-calls-in-go-using-httptest>

<div class="html">

&lt;!-- --&gt;

</div>

```text
func TestIt(t *testing.T){
    ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        fmt.Fprintln(w, `{"fake twitter json string"}`)
    }))
    defer ts.Close()

    twitterUrl = ts.URL
    c := make(chan *twitterResult)
    go retrieveTweets(c)

    tweet := <-c
    if tweet != expected1 {
        t.Fail()
    }
    tweet = <-c
    if tweet != expected2 {
        t.Fail()
    }
}
```