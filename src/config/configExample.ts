export const oidcObject = {
    OIDC_HOST: "",
    RESPONSE_TYPE: "",
    SCOPE: "",
    CLIENT_ID: "",
    STATE: "",
    REDIRECT_URI: "http://localhost:8080/login",
    CLIENT_SECRET: "",
}

export const config = {
    URL_TO_OIDC_STRING: `${oidcObject.OIDC_HOST}?response_type=${oidcObject.RESPONSE_TYPE}&scope=${oidcObject.SCOPE}&client_id=${oidcObject.CLIENT_ID}&state=${oidcObject.STATE}&redirect_uri=${oidcObject.REDIRECT_URI}`,
    LOGIN_ENDPOINT: 'http://localhost:8080/',
}