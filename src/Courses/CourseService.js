const url = "http://localhost:2000";
const headers = {
  "Content-Type": "application/json",
};

const currentUser = JSON.parse(localStorage.getItem("user"));

function addCourse(course) {
  return new Promise((resolve, reject) => {
    course.createdBy = currentUser.email;
    fetch(`${url}/course/add`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(course),
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function updateCourse(course) {
  return new Promise((resolve, reject) => {
    course.createdBy = currentUser.email;
    fetch(`${url}/course/update`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(course),
    })
      .then(async (res) => {
        const r = await res.json();
        r.status ? resolve(r) : reject(r.msg);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


function deleteCourse(id) {}

function disableCourse(id) {}

function getCourseById(id) {}

function getAllCourse() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:2000/course/all")
      .then((res) => {
        res
          .json()
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addCourse,
  updateCourse,
  deleteCourse,
  disableCourse,
  getCourseById,
  getAllCourse,
};
