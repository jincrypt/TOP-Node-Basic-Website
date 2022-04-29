const http = require('http');
const url = require('url');
const fs = require('fs');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const errorPage = fs.readFileSync('404.html');
    const q = req.url
    const filename = q === '/' ? 'index.html' : `${q.substring(1)}.html`
    fs.readFile(filename, (error, data) => {
        if (error) {
            res.writeHead(404);
            res.end(errorPage);
        } else {
            res.end(data);
        }
    })
})
  

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log(`Server running at port ${port}`)
    }
})