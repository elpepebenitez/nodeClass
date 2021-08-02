const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request made');

	// set header content type
	res.setHeader('Content-Type', 'text/html');

	// send a response
	res.write('<h1>Hello uncommon</h1>');

	// end the response
	res.end();
});

server.listen(3000, 'localhost', () => {
	console.log('listening for requests on port 3000');
})