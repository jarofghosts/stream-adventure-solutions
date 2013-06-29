var trumpet = require('trumpet')(),
    through = require('through'),
    tr = through(write),
    loud = trumpet.select('.loud').createStream();
loud.pipe(tr).pipe(loud);

process.stdin.pipe(trumpet).pipe(process.stdout);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
