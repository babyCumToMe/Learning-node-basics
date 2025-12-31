const http = require('http');

const server = http.createServer((req, res) => {

    switch(req.url){
        case "/": 
        res.end(`<h1>Welcome to the home page!</h1>`);
        break;

        case "/about": 
        res.end(`<h1>Here's some info about us</h1>`);
        break;

        case "/contact":
        res.end("<h1>Here's our contact info</h1>");
        break;

        default: 
        res.end(`<h1>Oops!</h1>
                <p>We couldn't locate the page you are looking for</p>
                <a href = "/">Back to home</a>`);
    }
})

server.listen(5000);    