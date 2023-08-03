+++
title = "CSRF"
draft = false
+++

Cross-Site Request Forgery (CSRF)
: Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request


## Mitigations {#mitigations}


### Cookies {#cookies}

-   see


### `same-site` {#same-site}

prevents the browser from sending this cookie along with cross-site requests. The main goal is mitigate the risk of cross-origin information leakage. It also provides some protection against cross-site request forgery attacks. Possible values for the flag are lax or strict.

The strict value will prevent the cookie from being sent by the browser to the target site in all cross-site browsing context, even when following a regular link. For example, for a -like website this would mean that if a logged-in user follows a link to a private project posted on a corporate discussion forum or email, will not receive the session cookie and the user will not be able to access the project.
