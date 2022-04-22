var http=require('http');

var server=http.createServer(handleServer);

function handleServer(req,res){
    console.log(req.method);
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<h2> Welcome to AltCampus </h2>');
}
server.listen(2100,()=>{
    console.log('Server listening on port 2100');
})