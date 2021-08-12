const http = require('http');
const fs = require('fs');

// We create a server. We take in a request object and a response object
const server = http.createServer((req, res) => {
	console.log('Request made')
	// Set our response
	res.setHeader('Content-type', 'text/html')

	let path = './views/';

	switch(req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			break;
		default:
			path += '404.html';
			break;
	}

	// We read an html file
	fs.readFile(path, (err, data) => {
		if(err) {
			console.log(err);
			res.end(); // we should always end our responses!!
		} else {
			// We pass the html file content as data to the response
			res.write(data)
			res.end();
		}
	})
});

// We listen for requests on port 3000
server.listen(3000, 'localhost', () => {
	console.log('Listening for requests on port 3000')
});


// const http = require('http');
// const fs = require('fs');

// // const server = http.createServer((req, res) => {
// // 	console.log('request made');

// // 	// set header content type
// // 	res.setHeader('Content-Type', 'text/html');

// // 	// send a response
// // 	res.write('<h1>Hello uncommon</h1>');

// // 	// end the response
// // 	res.end();
// // });

// const server = http.createServer((req, res) => {
// 	console.log('request made');

// 	// set header content type
// 	res.setHeader('Content-Type', 'text/html');

// 	let path = './views/';

// 	switch(req.url) {
// 		case '/':
// 			path += 'index.html';
// 			res.statusCode = 200;
// 			break;
// 		case '/about':
// 			path += 'about.html';
// 			res.statusCode = 200;
// 			break;
// 		case '/about-me':
// 			res.statusCode = 301;
// 			res.setHeader('Location', '/about');
// 			res.end();
// 			break;
// 		default:
// 			path += '404.html';
// 			res.statusCode = 404;
// 			break;
// 	}

// 	// send an html
// 	fs.readFile(path, (err, data) => {
// 		if(err) {
// 			console.log(err);
// 			res.end();
// 		} else {
// 			// res.write(data);
// 			res.end(data);
// 		}
// 	})
// });

// server.listen(3000, 'localhost', () => {
// 	console.log('listening for requests on port 3000');
// })