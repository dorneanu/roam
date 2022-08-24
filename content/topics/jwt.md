+++
title = "JWT"
draft = false
+++

-   defined in [RFC 7519](https://tools.ietf.org/html/rfc7519)
    -   also contains security recommendations
-   used as bearer access token
    -   you accept the token from whoever presented it to
    -   however, you can change the bearer token into a Proof of Possession token (a token)
        -   by adding a confirmation claim
            -   can contain a fingerprint of the clients certificate
            -   gets validated by the resource server
-   always check the issuer
    -   check the iss claim against a whitelist
-   always check the audience
-   Structure
    -   A JWT token looks like this: ~ ..~ \* Security **\* cookies vs. JWT \*\*** cookies are a storage mechanism **\*** JWT are cryptographically signed tokens \* resources **\* <https://curity.io/resources/learn/jwt-best-practices/> \*** <https://datatracker.ietf.org/doc/html/draft-ietf-oauth-jwt-bcp-07> **\* <http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/> \*** <http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/> **\* <https://evertpot.com/jwt-is-a-bad-default/> \*** [Why JWTs Are Bad for Authentication -- Randall Degges (Head of Dev Relations, Okta)](https://www.youtube.com/watch?v=GdJ0wFi1Jyo)