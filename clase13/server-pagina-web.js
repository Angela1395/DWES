const http = requiere('http');
const fs= requiere('fs');

const serve = http.createserver((req, res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream('./documento.html').pipe(res);
}).listen(process.env.PORT || 3000);