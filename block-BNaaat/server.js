var http=require('http');
var fs=require('fs');
var server=http.createServer(handleRequest);

function handleRequest(req,res){
fs.readFile('./about.html',(err,content)=>{
    
})
}

server.listen(5555,()=>{
    console.log('Server listening on port 5555')
})