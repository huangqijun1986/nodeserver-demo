var fs = require('fs');
function home(request,response) {
      console.log("Request handler 'home' was called.");
      fs.readFile('./test.txt','utf-8',function(err,data){
          if(err){
              console.log(err);
          }
          else{
              console.log(data);
          }
      });
      response.writeHead(200, {'content-type': 'text/html'});
      response.end();
}

function start(request,response) {
    console.log("Request handler 'start' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request handler 'start' was called.");
    response.end();
    
}

function upload(request,response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request handler 'upload' was called.");
    response.end();
}

exports.home = home;
exports.start = start;
exports.upload = upload;