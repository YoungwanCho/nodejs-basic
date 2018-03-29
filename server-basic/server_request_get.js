var http = require('http');

var url = require('url');

var querystring = require('querystring');

var server = http.createServer(function(request, responese){
    console.log('--- log start ---');

    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);

    var result1 = parsedQuery.var1;
    console.log('전달된 var1의 값은 ' + result1 + '입니다.');

    console.log('--- log end ---');

    responese.writeHead(200, {'Content-Type':'text/html'});
    responese.end('var1 = ' + result1 + ' var2 = ' + parsedQuery.var2 + ' var3 = ' + parsedQuery.var3);
});

server.listen(8080, function() {
    console.log('Server is running...');
})