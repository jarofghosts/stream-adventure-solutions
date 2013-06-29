var concat = require('concat-stream');

process.stdin.pipe(concat(rev));

function rev(body) {
  console.log(body.toString().split('').reverse().join(''));
}
