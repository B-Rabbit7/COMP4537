const url = require('url');
const http = require('http');
const date = require('./COMP4537/labs/3/modules/utils')

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (q.pathname === '/COMP4537/labs/3/getDate/') {
        console.log(q.query);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(`<b><span style="color: blue;">Hello ${q.query["name"]}, what a beautiful day. The current date and time is: ${date.getDate()}</span><b>`);
        res.end
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not Found');
    }
    res.end();
});
const PORT = process.env.PORT || 8888;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});