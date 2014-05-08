var http = require('http')
  , st = require('st');

// static file server configuration
var mount = st({
    path: "www/",
    url: "/", // defaults to path option
    cache: {
      fd: {
        max: 1000, // number of fd's to hang on to
        maxAge: 1000*60*60, // amount of ms before fd's expire
      },

      stat: {
        max: 5000, // number of stat objects to hang on to
        maxAge: 1000 * 60, // number of ms that stats are good for
      },

      content: {
        max: 1024*1024*64, // how much memory to use on caching contents
        maxAge: 1000 * 60 * 10, // how long to cache contents for
      },

      index: { // irrelevant if not using index:true
        max: 1024 * 8, // how many bytes of autoindex html to cache
        maxAge: 1000 * 60 * 10, // how long to store it for
      },

      readdir: { // irrelevant if not using index:true
        max: 1000, // how many dir entries to cache
        maxAge: 1000 * 60 * 10, // how long to cache them for
      }
    },

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
