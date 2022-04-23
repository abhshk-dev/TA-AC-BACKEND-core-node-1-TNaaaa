var http = require("http");
var fs = require("fs");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method==='GET'&& req.url === "/file") {
    fs.readFile("./node.html", (err, content) => {
        if(err) console.log(err);
        res.setHeader('Content-type','text/html');
        res.end(content);
    });
  }
  if(req.method==='GET'&& req.url==="/stream"){
    res.setHeader('Content-type','text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(2100, () => {
  console.log("Server listening on port 2100");
});
