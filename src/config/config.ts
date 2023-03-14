export const oidcObject = {
    OIDC_HOST: "https://api.int-id.smartbear.com/openid/auth",
    RESPONSE_TYPE: "code",
    SCOPE: "openid email",
    CLIENT_ID: "owirAvX3pIu3c4nPDa75jlhF8ASlmgYBOpkI4VAR78EjP4eYePFDSJLI7dlsFDF",
    STATE: "what-is-going-on-here",
    REDIRECT_URI: "http://localhost:8080/login",
    CLIENT_SECRET: "OuoMekf3Zl5oAYSW5pb7furpC3YJtNGG8I0Eh",
}

export const config = {
    URL_TO_OIDC_STRING: `${oidcObject.OIDC_HOST}?response_type=${oidcObject.RESPONSE_TYPE}&scope=${oidcObject.SCOPE}&client_id=${oidcObject.CLIENT_ID}&state=${oidcObject.STATE}&redirect_uri=${oidcObject.REDIRECT_URI}`,
    LOGIN_ENDPOINT: 'http://localhost:8080/',
}