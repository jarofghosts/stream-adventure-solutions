var split = require('split'),
    through = require('through'),
    tr = through(write),
    even = false;

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write(line) {
  var text = line.toString();
  this.queue((even ? text.toUpperCase() : text.toLowerCase()) + "\n"); 
  even = !even;
}
