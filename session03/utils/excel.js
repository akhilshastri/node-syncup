const XLSX = require('xlsx');


module.exports = (filename)=>{
  const wb = XLSX.readFile(filename) ;
  const sheet = wb.Sheets['Sheet1'];
  return XLSX.utils.sheet_to_json(sheet );
};


//
// module.exports = function (filename){
//   const wb = XLSX.readFile(filename) ;
//   const sheet = wb.Sheets['Sheet1'];
//   return XLSX.utils.sheet_to_json(sheet );
// };



// function save (filename){
//   const wb = XLSX.readFile(filename) ;
//   const sheet = wb.Sheets['Sheet1'];
//   return XLSX.utils.sheet_to_json(sheet );
// }
//
// module.exports = save ;
//
