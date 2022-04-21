console.log(`Welcome to Node Environment`);

var os=require('os');
var {readFile,readFileSync}=require('fs');

//console.log(os.cpus().length);

//console.log(os.freemem());

//console.log(os.uptime());
/*
let buff1=Buffer.alloc(12);
let buff2=Buffer.allocUnsafe(12);

buff1.write('Buffer 1');
console.log(buff1.toString());

var sync=readFileSync('./App.js');
console.log(sync);
readFile('./App.js',(err,content)=>{
    console.log(err,content);
})
*/

