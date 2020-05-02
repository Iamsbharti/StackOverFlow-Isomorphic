const baseUrl =
  "https://stackexchange.com/oauth/dialog?client_id=17823&scope=read_inbox,no_expiry&redirect_uri=https://stackexchange.com/oauth/login_success";
export default class Authentication {
  authorize() {
    console.log("calling authorize");
    const res = fetch(baseUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "https://stackexchange.com",
      },
      mode: "no-cors",
    });
    return res;
  }
}

//tTmlUIhA4LbShKuCf4CmOQ))
/*fetch("https://stackoverflow.com/oauth/access_token", {
  method: "POST",
  body:
    "grant_type=client_credentials&client_id=" +
    key +
    "&client_secret=" +
    secret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(function (resp) {
    // Return the response as JSON
    return resp.json();
  })
  .then(function (data) {
    // Log the API data
    console.log("token", data);
  })
  .catch(function (err) {
    // Log any errors
    console.log("something went wrong", err);
  });
*/
