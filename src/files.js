const fs = require('fs')

// READING FILES
// fs.readFile('./docs/node.txt', (err, data) =>{
//     if(err) {
//         console.log(err);
//     }
//     // console.log(data)
//     console.log(data.toString())
// });

// console.log('Oh hi')

// WRITING FILES
// const text = 'Node fs just wrote this!' 
// fs.writeFile('./docs/node.txt', text, () => {
//     console.log('File was written!')
// })

// fs.writeFile('./docs/newFile.txt', 'Oh this is new', () => {
//     console.log('File was created and written!')
// })

// // You can also append data to the end!
// fs.appendFile('./docs/newFile.txt', 'We want to append this', () => {
//     console.log('Data was appended')
// })

// DIRECTORIES
// fs.mkdir('./assets', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Check the new asset folder')
// })

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Check the new asset folder')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('The asset folder is gone')
//     })
// }

// DELETING FILES
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('File deleted')
//     })
// }