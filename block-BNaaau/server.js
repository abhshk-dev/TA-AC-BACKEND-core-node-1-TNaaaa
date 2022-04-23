var http=require('http');
var PORT=2357;
var fs=require('fs');
var url=require('url');
var server=http.createServer(handleRequest);
function handleRequest(req,res){
    var parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl.pathname);
    console.log(req.url);
    res.setHeader('Conotent-type','application/json');
    res.end(JSON.stringify(parsedUrl.query));
}
server.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
});