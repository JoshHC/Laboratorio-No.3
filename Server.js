const http = require('http')

const port = 3000
const name = 'Josh'

http.createServer((req, res) => {
    let urls = req.url.split('/');
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(`{Hola: ${name} este servidor esta corriendo en el puerto: ${port}}`)
}).listen(port)

console.log(`server running at http://localhost:${port}`)