// callbacks, promises, async/await
// Promises - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const container = document.querySelector(".image-container");
const url = "https://source.unsplash.com/random";
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  showImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

const showImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`There is an error with ${url}`));
    });
  });
};
