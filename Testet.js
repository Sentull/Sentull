var http = require('http');
var hayu = require('./Tester1');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Aslii Ieu Mah " + hayu.gassKeun());
    res.end();
}).listen(8080);