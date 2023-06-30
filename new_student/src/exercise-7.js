function printString(string) {

  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if(typeof string === 'string'){
          console.log(string);
          resolve(string);
        } else {
          reject(`Input value "${string}" is not type of String`)
        }
     },
      Math.floor(Math.random() * 100) + 1);
  });
}


function printAll() {
  printString("A")
    .then(() => {
      return printString("B")
    })
    .then(() => { 
      return printString("C")
    })
    .catch((e) => {
      console.log(e)
    })
}

printAll();
// expected result in console:
// A
// B
// C