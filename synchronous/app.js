// JavaScript is simple threaded, synchronous language

console.log(`I'm first`);
console.log(`I'm second`);
console.log(`I'm third`);
boilingWater();
console.log(`I'm first`);
console.log(`I'm second`);
console.log(`I'm third`);

function boilingWater() {
  console.log("boiling water");
  for (let i = 0; i < 10000; i++) {
    console.log("still boiling");
  }
  console.log("done");
}
