
console.log(' program started')

function first(){

 return 'A' ;

}


function second(){

 return new Promise( funcion(resolve, reject) {

    setTimeout(()=>{
        resolve('B') ; // <===
    }, 2000);
 }) ;

} ;


function third( ){

 return 'C' ;
}

first();

second().then(function(result){
  console.log('result ' + result)
})

third()

console.log(' program end')
