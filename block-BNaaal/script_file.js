var http=require('http');

var server=http.createServer(handleRequest);

function handleRequest(req,res){
    res.end('Server created, Welcome')
}
server.listen(4000,"localhost",()=>{
    console.log('server created');
});