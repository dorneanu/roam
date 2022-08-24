+++
title = "Richardson Maturity Level"
draft = false
+++

-   Level 0
    -   At level 0, the API uses the implementing protocol (normally HTTP, but it doesn't have to be) like a transport protocol. There is no effort to utilize the protocol to indicate state; it is just used to pass requests and responses back and forth. The system typically has one entry point (URI) and one method (normally POST in the case of ).
-   Level 1 - resources
    -   Here, the API distinguishes between multiple resources using different URLs. However, there is still typically only one method (POST) of interaction. This is better than the previous level because now there is a hierarchical definition of resources. Instead of going through _hotels, now the API assigns IDs to each hotel and uses that to see which hotel the request is for, so the API will have URLs of the /hotels_ form.
-   Level 2 - Verbs
    -   This level indicates that the API uses protocol properties (namely, HTTP verbs) to define the nature of the API. Thus GET is used for a read, POST is used to create a new resource, PUT to update a resource, and DELETE to of course delete the resource. The API also uses standard responses code such as 200 (OK) and 202 (ACCEPTED) to describe the result of the request. Generally, most REST API implementations are at this level.
-   Level 3 - Hypermedia controls
    -   Level 3, the highest level, uses Hypertext As The Engine Of Application State (HATEOAS) to allow clients to deal with discovering the resources and the identifiers.