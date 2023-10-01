// import path from 'path';
const path  = require('path');

const filePath = path.join('foo','bar','image.png');
const fileName = path.basename(filePath);
console.log(fileName);