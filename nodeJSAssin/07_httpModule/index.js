const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write("<h1>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</h1>")
    }
    res.end()
})

server.listen(5000)
console.log('The Http server is running on port 5000');