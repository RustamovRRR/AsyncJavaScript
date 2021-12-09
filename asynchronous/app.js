// JavaScript is simple threaded, synchronous language
// Make Soup
// chop onion
// chop carrot
// boil water 10 minutes
// add carrot boil for 5 minutes
// add onion boil for 5 minutes
// Browser !!! Fetch data, Get Geolocation, setTimeout, setTimer, etc.

boilWater(0);
console.log("chop carrot");

function boilWater(time) {
  console.log("boiling water");
  setTimeout(() => {
    console.log("done");
    // time is minimum time
  }, time);
}
