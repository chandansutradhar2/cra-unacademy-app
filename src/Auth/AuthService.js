const createAccount = (user) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:2000/auth/signup", {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(res);
        const response = await res.json();
        if (response.status) {
          resolve(true);
        } else {
          reject({ message: response.msg });
        }
      })
      .catch((err) => {
        reject({ message: "failed due to technical error" });
      });
  });
};

const signIn = (email, password) => {};

module.exports = {
  createAccount,
  signIn,
};
