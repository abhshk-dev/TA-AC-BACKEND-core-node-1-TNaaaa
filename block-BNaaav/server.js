var http=require('http');


var server=http.createServer(handleServer);

function handleServer(req,res){
    res.setHeader('Content-type','text/html');
    res.end('<h2> Learning Nodejs</h2>');
}

server.listen(2226,()=>{
    console.log('Sever listening on port 2226')
})