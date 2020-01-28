/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

//"Partnah"
//"Howdy"
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => console.log("Welcome"), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  setTimeout(() => console.log('good bye'), 2000);
  console.log("hello");
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => {
    console.log("hi");
  }, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE 
  let current = Date.now();
  let stop = setInterval(() => {
    if ((Date.now() - current) > 5000) {
      clearInterval(stop);
    }
    console.log("hi for now");
  }, 1000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(callback, callbackFunInterval, funInterval) {
  //ADD CODE HERE
  let current = Date.now();
  let stop = setInterval(() => {
    if ((Date.now() - current) > (funInterval * 1000)) {
      clearInterval(stop);
    }
    callback();
  }, callbackFunInterval * 1000);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!