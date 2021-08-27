// const http = require('http');
// const fs = require('fs');

// // We create a server. We take in a request object and a response object
// const server = http.createServer((req, res) => {
// 	console.log('Request made')
// 	// Set our response
// 	res.setHeader('Content-type', 'text/html')

// 	let path = './views/';

// 	switch(req.url) {
// 		case '/':
// 			path += 'index.html';
// 			res.statusCode = 200;
// 			break;
// 		case '/about':
// 			path += 'about.html';
// 			break;
// 		default:
// 			path += '404.html';
// 			break;
// 	}

// 	// We read an html file
// 	fs.readFile(path, (err, data) => {
// 		if(err) {
// 			console.log(err);
// 			res.end(); // we should always end our responses!!
// 		} else {
// 			// We pass the html file content as data to the response
// 			res.write(data)
// 			res.end();
// 		}
// 	})
// });

// // We listen for requests on port 3000
// server.listen(3000, 'localhost', () => {
// 	console.log('Listening for requests on port 3000')
// });

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if(req.url == '/'){

	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
	// 		if(err) throw err;
	// 		res.writeHead(200, {'Content-Type': 'text/html'})
	// 		res.end(data)
	// 	})
	// }
	// if(req.url == '/about'){

	// 	fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
	// 		if(err) throw err;
	// 		res.writeHead(200, {'Content-Type': 'text/html'})
	// 		res.end(data)
	// 	})
	// }
	// // web service
	// if(req.url == '/api/users'){
	// 	const users = [
	// 		{ name: 'Pepe', age: 29 },
	// 		{ name: 'Bob', age: 28 },
	// 		{name: 'John', age: 27 }
	// 	]
	// 	res.writeHead(200, {'Content-Type': 'application/json'})
	// 	res.end(JSON.stringify(users))
	// }

	// Build dynamic file path
	let filePath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url);
	console.log(filePath);
	// Get extension of file
	let extname = path.extname(filePath)

	// Initial content type (default)
	let contentType = 'text/ht÷ml';

	// Check ext and set content type
	switch(extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;	
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;		
	}

	// Read file
	fs.readFile(filePath, (err, data) => {
		if(err) {
			if(err.code == 'ENOENT') {
				// page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
					if(error) throw error;
					res.writeHead(200, {'Content-Type': 'text/html'});
					res.end(content, 'utf8');
				})
			} else {
				// Some server error most likely
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			// Success
			res.writeHead(200, {'Content-Type': contentType});
			res.end(data, 'utf8');
		}
	})
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
