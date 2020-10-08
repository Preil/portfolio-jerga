import auth0 from 'auth0-js';

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-preil.us.auth0.com',
      clientID: 'pJ52z96HjOBVjaLTF2sHSf2wan4o96mh',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this)

  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    debugger;
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          console.log(err);
          reject(err);
        }
      });
    })

  }

  setSession() {
    // Save token!!!
  }

}

const auth0Client = new Auth0();
export default auth0Client;
