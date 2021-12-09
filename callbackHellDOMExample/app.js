// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    heading1.style.fontSize = "5rem";
    heading1.style.transform = "rotate(5deg)";
    heading1.style.transition = "all 0.3s linear";
    heading1.style.background = "grey";
    setTimeout(() => {
      heading2.style.color = "blue";
      heading2.style.fontSize = "5rem";
      heading2.style.transform = "rotate(5deg)";
      heading2.style.transition = "all 0.3s linear";
      heading2.style.background = "grey";
      setTimeout(() => {
        heading3.style.color = "green";
        heading3.style.fontSize = "5rem";
        heading3.style.transform = "rotate(5deg)";
        heading3.style.transition = "all 0.3s linear";
        heading3.style.background = "grey";
      }, 1000);
    }, 1000);
  }, 1000);
});
