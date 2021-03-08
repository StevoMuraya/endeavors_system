const http = require('http');

const server = http.createServer((req,res,next)=>{console.log('created')});
server.listen(3000);