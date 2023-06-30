function printString(string, callback) {
  //console.log("STARTED: " + string);
  setTimeout(
    () => {
      console.log(string);
      if(callback) callback();
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll() {
 printA();
}
function printA() {
  printString("A", printB);
}
function printB() {
  printString("B", printC);
}
function printC() {
  printString("C");
}

printAll();
// expected result in console:
// A
// B
// C