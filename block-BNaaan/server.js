var http=require('http');

var server= http.createServer(handleRequest);
function handleRequest(req,res){
    res.end('Welcome 🔥🔥🔥');
    console.log(req.method);
    //console.log(req.header);
}
server.listen(3000,()=>{
    console.log('Server Created');
})