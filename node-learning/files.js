const fs = require('fs');
fs.readFile('./folder/ftp.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('Why is this line running faster than the rest');

fs.writeFile('./folder/ftp.txt', 'I am done with this', () => {
    console.log('It a clear penalty obviously!');
});
fs.writeFile('./folder/tcp.txt', 'I will be promoted in next three years', () => {
})

if (!fs.existsSync('./components')) {
   fs.mkdir('./components', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The folder created successfully!')
}) 
} else {
    fs.rmdir('./components', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder is deleted successfully');
    })
}

if (fs.existsSync('./folder/delete.txt')) {
    fs.unlink('./folder/delete.text', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('The file has deleted');
    })
}
