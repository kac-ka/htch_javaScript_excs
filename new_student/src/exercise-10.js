function addString(previous, current){
  return new Promise((resolve, reject) => {
  setTimeout(
    () => {
      resolve(previous + ' ' + current);
    },
    Math.floor(Math.random() * 100) + 1);
  });
}

async function addAll(){
  let result = "";
  result = await addString(result, 'A');
  result = await addString(result, 'B');
  result = await addString(result, 'C');
  console.log(result);
}

addAll();
// expected result in console:
// A B C