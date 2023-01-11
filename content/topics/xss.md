+++
title = "XSS"
draft = false
+++

Cross-Site-Scripting (XSS)
: In case of XSS, the attacker makes the victim's browser execute a script (mostly ) that has been injected by the attacker while visiting a trusted web site. The attacker has several ways of injecting the into a web site that the victim trusts. Also check


## Impact {#impact}

-   used to steal **hijack user session**
-   steal sensitive information
    -   cookies
    -   PII data
-   conduct **phishing** attacks
-   install a keylogger on the site affected by XSS


## Advanced attacks {#advanced-attacks}

-   [Reading JWTs from localStorage](https://medium.com/redteam/stealing-jwts-in-localstorage-via-xss-6048d91378a0)
    -   don't store [JWT]({{< relref "jwt.md" >}}) in the `local storage`


## XFS {#xfs}

Cross Frame Scripting
: Cross-Frame Scripting (XFS) is an attack that combines malicious with an iframe that loads a legitimate page in an effort to steal data from an unsuspecting user


### Mitigations {#mitigations}

The `X-Frame-Options` HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`.

Examples:

```html
X-Frame-Options: deny
X-Frame-Options: sameorigin
X-Frame-Options: allow-from https://example.com/
```


## Mitigations {#mitigations-1}


### Special characters {#special-characters}

-   validate input
    -   process of ensuring an application is rendering the correct data and preventing malicious data from doing harm to the site, database, and users
-   sanitize data
-   escape data


### Cookies {#cookies}

-   `httpOnly`
    -   The purpose of the flag is to make the value of the cookie unavailable from , so that it can not be stolen if there is a XSS vulnerability.


### Security headers {#security-headers}


#### `Content-Security-Policy` {#content-security-policy}

The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints

Example:

```html
Content-Security-Policy: default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';
```

This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg. object, frame, media, etc).


#### `X-XSS-Protection` {#x-xss-protection}

The X-XSS-Protection header is designed to enable the cross-site scripting (XSS) filter built into modern web browsers. This is usually enabled by default, but using it will enforce it.

Example:

```html
X-XSS-Protection: 1; mode=block
```

`1; mode=block` value also enables the XSS Filter and rather than sanitize the page, when an XSS attack is detected, the browser will prevent rendering of the page


## Payloads {#payloads}

-   <https://github.com/payloadbox/xss-payload-list>
