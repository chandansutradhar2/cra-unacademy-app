const url = "http://localhost:2000";

export const addSection = (section) => {
  return new Promise((resolve, reject) => {
    console.log(section);
    fetch(`${url}/section/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(section),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          if (data.status) {
            resolve();
          } else {
            reject(data.msg);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export function getAllSectionByCourseId(courseId) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/section/${courseId}`, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          if (data.status) {
            resolve(data.body);
          } else {
            reject(data.msg);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
