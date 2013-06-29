var crypto = require('crypto'),
    parser = require('tar').Parse(),
    gunzip = require('zlib').createGunzip(),
    through = require('through'),
    stream = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (entry) {
  if (entry.type !== 'File') { return; }
  var md5 = crypto.createHash('md5', { encoding: 'hex' });
  entry.pipe(md5).pipe(through(function (h) {
    this.queue(h + ' ' + entry.path + '\n');
  })).pipe(process.stdout);
});

process.stdin.pipe(stream).pipe(gunzip).pipe(parser);
