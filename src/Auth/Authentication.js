import auth0, { WebAuth } from "auth0-js";
export default class Authentication {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: "stackoverflow.com/oauth/dialog",
      clientID: "1781",
      redirectUri: "localhost:3000",
      responseType: "access_token",
      scope: "write_access private_info no_expiry",
    });
    this.login = this.login.bind(this);
  }
  login() {
    this.auth0.authorize();
  }
}
