const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
        return;
    }
    if(req.url === '/about'){
        res.end('Welcome to our home page');
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    // setup return
    // if / else if / else
});

server.listen(5000)