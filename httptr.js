var through = require('through'),
    tr = through(write),
    http = require('http');

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    req.pipe(tr).pipe(res);
  } else {
    req.pipe(res);
  }
}).listen(8000);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
