let {readFile,readFileSync}=require('fs');

readFile('./content.md','utf-8',(err,content)=>{
    console.log(content);
});

let result=readFileSync('./content.md','utf-8');

console.log(`${result} synchronous`);

let buff1=Buffer.alloc(10);

buff1.write('Welcome to Buffer');
console.log(buff1);