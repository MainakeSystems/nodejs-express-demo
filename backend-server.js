let static = require('node-static');
 
let file = new static.Server('html');
 
require('http')
  .createServer((request, response) => {
    request.addListener('end', () => {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(5000);
