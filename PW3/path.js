const path = require('path');

const filePath = '/user/local/bin/example.txt';

console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Parsed Path:', path.parse(filePath));
console.log('Joined Path:', path.join('/user', 'local', 'bin', 'example.txt'));
console.log('Normalized Path:', path.normalize('/user//local/bin/../bin/example.txt'));