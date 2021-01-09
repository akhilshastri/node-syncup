console.log(' program started')

function first() {

  return 'A';

}


function second() {

  return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('B'); // <===
      }, 2000);
    }
  );

}


function third(secondResult) {

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve( secondResult + 'C'); // <===
    }, 2000);
  }
);

}

first();

second()
  .then(function (secondResult) {
    third(secondResult)
        .then(thirdResult=>{
          console.log('third result', thirdResult) ;
        })
})



console.log(' program end')
