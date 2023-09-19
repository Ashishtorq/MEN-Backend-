const fs = require('fs');

// const input  = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if (input[2] == remove){
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log("invalid input");
// }

fs.writeFileSync('apple.txt','this is apple')
fs.readFile(apple.txt,'utf8',(err,item)=>{console.log(item)})