import auth0 from 'auth0-js';
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'

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
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

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
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    // localStorage.setItem('access_token', authResult.accessToken);

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  // getting JW keys set from Auth0 domain
  async getJWKS() {
    const res = await axios.get('https://dev-preil.us.auth0.com/.well-known/jwks.json');
    const jwks = res.data;
    return jwks
  }

  // verifying provided token
  async verifyToken(token) {
    // if token not undefined
    if (token) {
      // decoding token with complete option - to access token header
      const decodedToken = jwt.decode(token, {complete: true});
      // getting keys from Auth0 domain
      const jwks = await this.getJWKS();
      // taking first key
      const jwk = jwks.keys[0];
      // BUILD CERTIFICATE
      // getting x5c first element, it is long string
      let cert = jwk.x5c[0];
      // splitting the string into lines 64 characters long
      cert = cert.match(/.{1,64}/g).join('\n');
      // attaching begin line and end line t0 the certificate
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      // comparing kid value from jwk and decodedToken
      if (jwk.kid === decodedToken.header.kid) {
        try {
          //getting verified token from jwt API
          const verifiedToken = jwt.verify(token, cert);
          // getting expeiresAt time in seconds
          const expiresAt = verifiedToken.exp * 1000;
          // return true if verifiedToken was received and expiresAt time did not exceed
          return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }
    return undefined;
  }


  async clientAuth() {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = await this.verifyToken(token)
    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {
      const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
      if (!tokenCookie) return undefined;
      const token = tokenCookie.split('=')[1];
      return await this.verifyToken(token)
    }
    return undefined;
  }

}

const auth0Client = new Auth0();
export default auth0Client;
