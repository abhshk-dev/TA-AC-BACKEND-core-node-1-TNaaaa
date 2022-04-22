var http=require('http');

var server= http.createServer(handleRequest);
function handleRequest(req,res){
    
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
}
server.listen(2000,()=>{
    console.log('Server Created on port 2000');
})