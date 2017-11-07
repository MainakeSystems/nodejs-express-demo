let static = require('node-static');
 
let file = new static.Server('html');

let port = Number(process.env.PORT || 5000);
 
require('http')
  .createServer((request, response) => {
    request.addListener('end', () => {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);
