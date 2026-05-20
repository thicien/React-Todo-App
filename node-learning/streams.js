const fs = require('fs');

const readStream = fs.createReadStream('./folder/ftp.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./folder/write.txt');
readStream.on('data', (chunk) => {
    console.log('------NEW CHUNK-------');
    console.log(chunk)
    writeStream.write('.\n NEW CHUNK \n');
    writeStream.write(chunk);
});
const readStream = fs.createReadStream('./folder/tcp.txt', { encoding: 'utf-8' });
readStream.off('data', (chunk) => {
    console.log(chunk);
})