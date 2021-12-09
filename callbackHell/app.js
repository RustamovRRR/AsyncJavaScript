// JavaScript is simple threaded, synchronous language
// Make Soup
// chop onion
// chop carrot
// boil water 10 minutes
// add carrot boil for 5 minutes
// add onion boil for 5 minutes
// Browser !!! Fetch data, Get Geolocation, setTimeout, setTimer, etc.
// callbacks, promises, async/await

boilWater();

function boilWater() {
  console.log("boiling water");
  console.log("chop carrot");
  setTimeout(() => {
    console.log("done");
    console.log("carrot added");
    setTimeout(() => {
      console.log("carrot boiled");
      console.log("added onion");
      setTimeout(() => {
        console.log("onion boiled");
      }, 5000);
    }, 5000);
    console.log("chop onion");
    // time is minimum time
  }, 10000);
}
