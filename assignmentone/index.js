const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function ( req, res) {
    const q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    fs.readFile(filename, function ( err, data ) {
        if ( err ) {
            console.log('Error reading file!');
            res.writeHead(404, {'Content-type': 'text/html'});            
            return res.end('404 not found');
        }    
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();        
    });
}).listen(8080);
