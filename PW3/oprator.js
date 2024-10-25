const os = require('os');

console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Information:', os.cpus());
console.log('Total Memory:', os.totalmem(), 'bytes');
