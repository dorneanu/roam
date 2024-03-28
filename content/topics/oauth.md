+++
title = "OAuth"
author = ["Cyneox"]
draft = false
+++

## RFCs {#rfcs}


## OAuth 2.0 Flow {#oauth-2-dot-0-flow}

```seqdiag
client -> resource owner [label = "Requests authorization"];
resource owner -> client [label = "Gives authorization"];
client -> authorization server [label = "Passes authorization grant"];
authorization server -> client [label = "Returns access token"];
client -> resource server [label = "Uses access token to access"];
```

1.  **Client**: Sends authorization request to Resource Owner (likely a user).
    -   **Example**: A third-party application asks a user for permission to access their Google
        Drive files.
2.  **Resource Owner**: If providing authorization, returns an authorization grant to the
    Client.
    -   **Example**: A user grants the third-party application access to Google Drive.
3.  **Client**: Sends the authorization grant to the Authorization Server for validation.
    -   **Example**: The third-party app presents its permission grant to Google's OAuth 2.0
        server.
4.  **Authorization Server**: After successful grant validation, returns an access token to the
    Client.
    -   **Example**: Google's OAuth 2.0 server verifies the grant and returns an access token.
5.  **Client**: Uses the access token to request data from the Resource Server.
    -   **Example**: The third-party application uses the token to access specified Google Drive
        files.


## OIDC Flow {#oidc-flow}

```seqdiag
relying party -> OpenID provider [label = "Requests ID token"];
OpenID provider -> relying party [label = "Returns ID token (contains user info)"];
relying party -> resource server [label = "Optionally uses access token to access"];
```

1.  **Relying Party**: Requests an ID token from the OpenID Provider for user authentication.
    -   **Example**: A web app requests user authentication from Okta.
2.  **OpenID Provider**: Validates the Relying Party's request, then returns an ID token
    (containing user info).
    -   **Example**: Okta validates the web app's request, authenticates the user, and returns an
        ID token with user information.
3.  **Relying Party**: Optionally uses the access token (if issued) to access a Resource
    Server.
    -   **Example**: The web app uses the access token issued by Okta to request data from an API
        belonging to the application.


## Resources {#resources}

-   2024-03-28 ◦ [Simplify workforce identity management using IAM Identity Center and trusted token issuers | AWS Security Blog](https://aws.amazon.com/blogs/security/simplify-workforce-identity-management-using-iam-identity-center-and-trusted-token-issuers/)
-   2024-03-28 ◦ [OAuth 2.0 and OpenID Connect overview | Okta Developer](https://developer.okta.com/docs/concepts/oauth-openid/)
    OAuth 2.0 vs. OIDC
-   2023-10-12 ◦ [Sessions, Tokens, JWT, SSO, and OAuth in One Diagram](https://blog.bytebytego.com/p/sessions-tokens-jwt-sso-and-oauth)
-   2023-07-05 ◦ [OAuth 2 Explained In Simple Terms - YouTube](https://www.youtube.com/watch?v=ZV5yTm4pT8g)
-   2023-04-06 ◦ [How Authentication and Authorization Work for SPAs | Okta Developer](https://developer.okta.com/blog/2023/04/04/spa-auth-tokens)
    -   nice pictures with dinosaurs
-   2023-01-02 ◦ [The complete guide to protecting your APIs with OAuth2 (part 1) - Stack Overflow Blog](https://stackoverflow.blog/2022/12/22/the-complete-guide-to-protecting-your-apis-with-oauth2/)
