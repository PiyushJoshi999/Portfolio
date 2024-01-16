// const http = require('node:http');

// // function reqListner(req, res){

// // }

// const server = http.createServer((req, res) => {
//     //console.log(req.url, req.method, req.headers);
//     //process.exit(); //it stops the server from receiving requests from the user

//     const url = req.url;
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title><head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello, This is my first server</h1></body>')
//     res.write('</html>');
//     res.end();
// });

// server.listen(4000);

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const fileName = 'messages.txt';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Check if the file exists before reading
        let messages = [];
        try {
            messages = fs.readFileSync(fileName, 'utf8').split('\n').filter(Boolean);
        } catch (error) {
            // Handle the case when the file doesn't exist
            if (error.code === 'ENOENT') {
                console.log(`${fileName} not found. Creating the file...`);
                fs.writeFileSync(fileName, ''); // Create an empty file
            } else {
                // Handle other file read errors
                console.error(`Error reading ${fileName}: ${error.message}`);
            }
        }

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');

        // Display existing messages
        res.write('<h2>Messages:</h2>');
        res.write('<ul>');
        messages.forEach((message) => {
            res.write(`<li>${message}</li>`);
        });
        res.write('</ul>');

        // Display the form
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message"><button type="submit">Submit</button>');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // Save the message to the file
            fs.appendFileSync(fileName, message + '\n');

            res.statusCode = 302; // Redirect
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello, This is my first server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
