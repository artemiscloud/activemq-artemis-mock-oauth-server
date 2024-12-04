const { OAuth2Server } = require('oauth2-mock-server');

let server = new OAuth2Server();

const start = async() => {
    // Generate a new RSA key and add it to the keystore
    await server.issuer.keys.generate('RS256');

    // Start the server
    await server.start(8080, 'localhost');
    console.log('Issuer URL:', server.issuer.url); // -> http://localhost:8080
}

start().then();
