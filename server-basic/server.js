var http = require('http');

var server = http.createServer(function(request, responese){

    responese.writeHead(200, {'Content-Type':'text/html'});
    responese.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('Server is running...');
});