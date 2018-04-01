var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = require('mime');

var server = http.createServer(function(request, response){
    var parseUrl = url.parse(request.url);
    var resource = parseUrl.pathname;

    if (resource.indexOf('/images/') == 0) {
        var imgPath = resource.substring(1);
        console.log('imgPath='+imgPath);

        var imgMime = mime.getType(imgPath);
        console.log('mime='+imgMime);

        fs.readFile(imgPath, function(error, data){
            if(error){
                response.writeHead(500, {'Content-Type':'text/html'});
                response.end('500 Internal server ' + error);
            } else {
                response.writeHead(200, {'Content-Type':imgMime});
                response.end(data);
            }
        });
    }else{
        response.writeHead(404, {'Content-Type':'text/html'});
        response.end('404 Page Not Found');
    }
});

server.listen(8081, function(){
    console.log('Server is running...');
});