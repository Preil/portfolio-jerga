import auth0 from 'auth0-js';
import Cookies from 'js-cookie'

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-preil.us.auth0.com',
      clientID: 'pJ52z96HjOBVjaLTF2sHSf2wan4o96mh',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user');
    Cookies.set('jwt');
    Cookies.set('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientId: 'pJ52z96HjOBVjaLTF2sHSf2wan4o96mh'
    })
  }

  handleAuthentication() {
    // debugger;
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

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    debugger;
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    // localStorage.setItem('access_token', authResult.accessToken);

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiration time
    const expiresAt = Cookies.getJson('expiresAt');
    return new Date().getTime() < expiresAt;
  }

}

const auth0Client = new Auth0();
export default auth0Client;
