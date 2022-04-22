var http=require('http');

var server = http.createServer(handleServer);
function handleServer(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.pathname);
    res.setHeader('Content-type','text/html');
    res.end('Welcome to HomePage');
}
server.listen(4000,()=>{
    console.log(`Server listening on port 4000`);
})