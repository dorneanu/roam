+++
title = "Golang"
tags = ["coding", "golang"]
draft = false
+++

## Articles {#articles}


### Architecture {#architecture}

-   2022-10-04 ◦ [Auto-generated C4 Architecture Diagrams in Go](https://threedots.tech/post/auto-generated-c4-architecture-diagrams-in-go/) ([PlantUML]({{< relref "plantuml.md" >}}))
-   2022-08-16 ◦ [Service Discovery with Go and mDNS](https://betterprogramming.pub/service-discovery-with-go-17b44011bcb2)


### AWS {#aws}

-   2022-10-10 ◦ [inanzzz | A simple AWS SNS example with Golang using Localstack](http://www.inanzzz.com/index.php/post/i5re/a-simple-aws-sns-example-with-golang-suing-localstack)
-   2022-10-10 ◦ [aws sdk go - How does one programmatically subscribe an SQS queue to an SNS topic in Go? - Stack Overflow](https://stackoverflow.com/questions/54204855/how-does-one-programmatically-subscribe-an-sqs-queue-to-an-sns-topic-in-go)
-   2022-09-96 ◦ [GO ON AWS](https://www.go-on-aws.com/)
    -   Using Golang for writing [CDK]({{< relref "cdk.md" >}}) stacks for [AWS]({{< relref "aws.md" >}})


### Botnets {#botnets}

-   2022-08-22 ◦ [GitHub - ThrillQuks/Pitraix: Modern Self-Modifying Cross-Platform Peer-to-Peer Botnet over TOR](https://github.com/ThrillQuks/Pitraix)


### Design Patterns {#design-patterns}

-   2022-09-05 ◦ [GoF Design patterns that still make sense in Go](https://dev.to/mauriciolinhares/gof-design-patterns-that-still-make-sense-in-go-27k5)


### Error handling {#error-handling}

-   2022-12-22 ◦ [New in Go 1.20: wrapping multiple errors](https://lukas.zapletalovi.com/posts/2022/wrapping-multiple-errors/)


### HTTP {#http}

-   2022-10-25 ◦ [Go and Proxy Servers: Part 1 - HTTP Proxies - Eli Bendersky's website](https://eli.thegreenplace.net/2022/go-and-proxy-servers-part-1-http-proxies/)


### Learning {#learning}

-   2022-11-16 ◦ [github.com/mauricioabreu/golings: rustlings but for golang this time](https://github.com/mauricioabreu/golings/)
-   2022-08-29 ◦ [How to use Go as a glue language](https://appliedgo.com/blog/go-as-a-glue-language)

    > Happiness comes from within: <span class="underline">self-conained binaries</span>
    >
    > Go is <span class="underline">verb-oriented</span>. Put a pot on the stove. Boil water. Pour the water over some tea leaves. Wait. Drink. This is the way humans think. When planning a task, you think about the necessary actions before you think about the array of objects needed for executing these actions.
    >
    > Go's “\*do something\*” approach gets your **stuff done.**
    >
    > The `net/http` package allows building a basic **HTTP server** with a **few lines of code**.
    >
    > Go has quite a unique approach of **abstracting away data sources and sinks as uniform data streams**. An `io.Reader` stream, for example, can represent input from a file, a network connection, an in-memory buffer, or even a simple string. Unit-test your code with a byte buffer, then use it in production with real files.
-   2022-08-17 ◦ [Preferred resource for 'advanced' Go? : golang](https://www.reddit.com/r/golang/comments/wlw5bj/preferred_resource_for_advanced_go/)
    -   Some good recommendation for advanced Go learning resources


### Malware {#malware}

-   2022-11-01 ◦ [Hacking with Go: Part 2 with Ivan Kwiatkowski (Go Time #251)](https://changelog.com/gotime/251)
-   2022-10-06 ◦ [GopherCon Europe 2021: Joakim Kennedy - The Dark Side of Go: A 2020 Go Malware Round Up](https://www.youtube.com/watch?v=rcsWz-gT0sI)

    > -   Government based
    >     -   APT28 - Zebrocy
    >     -   APT29 - WellMess and WellMail
    >     -   NOBELIUM aka UNC2452
    >         -   SolarWinds
    >     -   Holy Water/Storm Cloud APT
    >         -   used Google Drive as C2
    > -   Criminal background
    >     -   Loaders/Crypters
    >         -   [Ezuri](https://github.com/guitmz/ezuri) ([description on guitmz.com](https://www.guitmz.com/linux-elf-runtime-crypter/))
    >     -   RATs
    >         -   _Glupteba_
    >     -   Stealers
    >         -   _CryptoStealer.Go_
    >             -   steals cryptocurrency wallets and data stored in browsers
    >         -   Clipper
    >             -   _Clipboard Stealer_
    >     -   Ransomware
    >         -   _Robbin Hood_
    >         -   _NEPHILIM Ransomware_
    >         -   _EKANS_
    >     -   Bots
    >         -   Cross-Platform Mining Bots (for Linux and Windows)
    >             -   _XMRig Miner Dropper_
    >         -   P2P Bots
    >             -   _FritzFrog_
    >             -   _InterPlanetary Storm_
    >                 -   Uses IPFS


### Microservices {#microservices}

-   2022-10-04 ◦ [Encore Docs — Encore Flow](https://encore.dev/docs/develop/encore-flow)
    -   Visualize cloud microservices architecture
-   2022-08-25 ◦ [go-zero](https://github.com/zeromicro/go-zero)
    -   A cloud-native Go [Microservices]({{< relref "microservices.md" >}}) framework with cli tool for productivity.


### Security {#security}

-   2022-10-04 ◦ [Simple JWT Authentication for Golang (Part 1)](https://dev.to/omnisyle/simple-jwt-authentication-for-golang-part-1-3kfo) ([JWT]({{< relref "jwt.md" >}}))


### Serverless {#serverless}

-   2022-10-04 ◦ [gRPC and gRPC Web on Google Cloud Run (serverless) - GenDocu Blog](https://blog.gendocu.com/posts/grpc-on-google-cloud/)


### SSH {#ssh}

-   2022-11-21 ◦ [SSH port forwarding with Go - Eli Bendersky's website](https://eli.thegreenplace.net/2022/ssh-port-forwarding-with-go/)


### Success stories {#success-stories}

-   2022-10-19 ◦ [Have you moved from Java to Go (or another popular language)](https://www.reddit.com/r/golang/comments/y6hg08/have_you_moved_from_java_to_go_or_another_popular/)
