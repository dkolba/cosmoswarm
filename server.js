var http = require('http')
  , st = require('st');

// static file server configuration
var mount = st({
    path: "www/",
    url: "/", // defaults to path option
    cache: false,

    // index: true, // auto-index
    // index: 'index.html', // use 'index.html' file as the index
    index: "index.html",

    dot: false, // default: return 403 for any url with a dot-file part
    // dot: true, // allow dot-files to be fetched normally

    // passthrough: true, // calls next instead of returning a 404 error
    passthrough: false, // returns a 404 when a file or an index is not found
});

http.createServer(function(req, res) {
  if (mount(req, res)) return; //serving a static file
}).listen(process.env.httpport || 8080);
