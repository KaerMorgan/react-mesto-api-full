class Auth {
  constructor(config) {
    this.BASE_URL = config.url;
  }

  _checkErorr(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка" + res.status);
  }

  register = (password, email) => {
    return fetch(`${this.BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkErorr);
  };

  login = (password, email) => {
    return fetch(`${this.BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkErorr);
  };

  // checkToken = (token) => {
  //   return fetch(`${this.BASE_URL}/users/me`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(this._checkErorr)
  //     .then((data) => data);
  // };
}
export const auth = new Auth({
  url: `${window.location.protocol}//localhost:3000`,
});

// для подключения к моему серверу
// export const auth = new Auth({
//   url: `${window.location.protocol}//api.morgankatarn.nomoredomains.sbs`,
// });
