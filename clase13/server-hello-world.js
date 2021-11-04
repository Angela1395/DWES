const http = require('http');
const server = http.createServer((req, res)=> {
    res.write('Hellow World!\n');
    res.end();
});
server.listen(4000);