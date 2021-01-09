console.log(' program started')

function first() {
  return 'A';
}

function second() {
  console.log(' second running') ;
  return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(' second end') ;
        resolve('B'); // <===
      }, 2000);
    }
  );

}

function third(secondResult) {
  console.log(' third running') ;
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(' third end') ;
      resolve( secondResult + 'C'); // <===
    }, 2000);
  }
);

}

first();

const secondResult = await second() ;
 const thirdResult = await  third(secondResult) ;
      
   
        .then(thirdResult=>{
          console.log('third result', thirdResult) ;
        })




console.log(' program end')
