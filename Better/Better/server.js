const http = require('http');
const port = process.env.port || 1337;
const Etcd = require('node-etcd');
const etcd = new Etcd('172.17.8.101', '2379');
const hostname = '0.0.0.0';

http.createServer(function (req, res) {
    etcd.get(req.url.slice(1), function(err, result) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (err) {
            console.log(err);
        } else {
            res.end('Place your bets\n');  
        } 
    });
}).listen(port);