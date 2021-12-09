// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function myFuncrion(){
//   await
// }
// const myFuncrion = async () => {await}

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    await addColor(1000, heading1, "red");
    await addColor(1000, heading2, "blue");
    await addColor(1000, heading3, "green");
  } catch (error) {
    console.log(error);
  }
});

const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error("there is an error"));
    }
  });
};
