var http=require('http');

var server = http.createServer(handleServer);
function handleServer(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.pathname);
    res.setHeader('Content-type','json');
    res.end('{message: this is a post request}');
}
server.listen(3500,()=>{
    console.log(`Sever listening on port 3500`);
});