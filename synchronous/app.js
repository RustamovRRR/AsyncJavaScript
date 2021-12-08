// JavaScript is simple threaded, synchronous language

// console.log(`I'm first`);
// console.log(`I'm second`);
// console.log(`I'm third`);
// boilingWater();
// console.log(`I'm first`);
// console.log(`I'm second`);
// console.log(`I'm third`);

// function boilingWater() {
//   console.log("boiling water");
//   for (let i = 0; i < 10000; i++) {
//     console.log("still boiling");
//   }
//   console.log("done");
// }

// Make Soup
// chop onion
// chop carrot
// boil water 10 minutes
// add carrot boil for 5 minutes
// add onion boil for 5 minutes

boilWater(10000);
console.log("chop carrot");
boilWater(5000);
console.log("chop onion");
boilWater(5000);

function boilWater(time) {
  console.log("boiling water");
  for (let i = 0; i < time; i++) {
    console.log("still boiling");
  }
  console.log("done");
}
