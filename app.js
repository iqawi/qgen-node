var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('This is Q-Gen Solutions home. The site is under construction.</a>');
}).listen(process.env.VMC_APP_PORT || 1337, null);
