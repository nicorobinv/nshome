var http = require("http");
var fs = require("fs");
var url = require("url"); // url, fs, http 모듈이라는 뜻 노드제이에스에서 비슷한 기능을 그룹핑 해둔걸 모듈이라고 함

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData);
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + _url)); // 이부분은 사용자가 접속한 url에 따라서 1,2,3 파일들을 읽어주는 코드 임
});
app.listen(80);

// response.end(fs.readFileSync(__dirname + _url)); // 이부분은 사용자가 접속한 url에 따라서 1,2,3 파일들을 읽어주는 코드 임

// response.end(queryData.id); // 이부분은 사용자가 접속한 url에 따라서 1,2,3 파일들을 읽어주는 코드 임
