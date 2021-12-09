// callbacks, promises, async/await
// Promises - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let test = false;
  if (test) {
    resolve("Everthing is Ok");
  } else {
    reject("Some Error");
  }
});

// console.log(promise);

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
