var through = require('through'),
    tr = through(write);

process.stdin.pipe(tr).pipe(process.stdout);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
