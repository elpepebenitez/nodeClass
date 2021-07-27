const fs = require('fs');

// const readStream = fs.createReadStream('./docs/largeFile.txt', { encoding: 'utf8' })

// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK-----')
//     console.log(chunk)
// })

// const readStream = fs.createReadStream('./docs/largeFile.txt', { encoding: 'utf8' })
// const writeStream = fs.createWriteStream('./docs/newLargeFile.txt')

// readStream.on('data', (chunk) => {
//     // console.log('-----NEW CHUNK-----')
//     // console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

// PIPING
// readStream.pipe(writeStream)