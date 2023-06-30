function addString(previous, current){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if(typeof current === 'string') {
          resolve(previous + ' ' + current);
        } else {
          reject(`Input value "${current}" is not type of String`)
        }
      },
      Math.floor(Math.random() * 100) + 1
    )
  })
}


function addAll(){
  addString('' , 'A')
    .then(result => addString(result, 'B'))
    .then(result => addString(result, 'C'))
    .then(result => console.log(result))
    .catch((e) => {
      console.log(e)
    });
}

addAll();
// expected result in console:
// A B C