var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    if (resource == '/address') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('서울특별시 강남구 논현1동 111');
    }
    else if (resource == '/phone') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('02-123-4567');
    } else if (resource == '/name') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hong Gil Dong');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Page Not Found');
    }
});

server.listen(8081, function () {
    console.log('Server is running...');
})