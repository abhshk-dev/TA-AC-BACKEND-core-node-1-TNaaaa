var http=require('http');

var server = http.createServer(handleServer);
function handleServer(req,res){
    if(req.method==='GET' && req.url==='/'){
        res.setHeader('Content-type','text/plain');
        res.end(`Welcome to Homepage`);
    }else if(req.method==='GET'&& req.url ==='/about'){
        res.setHeader('Content-type','text/html');
        res.end(`This is all about NodeJs`);
    }else if(req.method==='POST'&& req.url ==='/about'){
        res.setHeader('Content-type','application/json');
        res.end('{message: this is a post request}');
    }
}
server.listen(3600,()=>{
    console.log(`Sever listening on port 3600`);
});