
console.log(' program started')

function first(){

 return 'A' ;

}


function second(){

 return new Promise( funncion(resolve, reject) {

    setTimeout(() => {
      resolve('B') ;
    }, 2000);
 }) ;

} ;


function third( ){


 return 'C' ;
}

first();
second().then


third()

console.log(' program end')
