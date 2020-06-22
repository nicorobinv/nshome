/*

var http = require("http");
var fs = require("fs");
var url = require("url"); // url, fs, http 모듈이라는 뜻 노드제이에스에서 비슷한 기능을 그룹핑 해둔걸 모듈이라고 함

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);

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
// response.end(fs.readFileSync(queryData.id));

*/

/*
function handleHome(req, res) {
  fs.readFile("index.html", function (error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200);
      res.end(fs.readFileSync(__dirname + _url));
    }
  });
}
*/
// const handleProfile = (req, res) => res.send("hihi");

/* Widgets */

//a { color: #fff; text-decoration: none; -webkit-transition: all 0.25s ease-out; transition: all 0.25s ease-out; }
// a:hover { opacity: 1; }

/* Center Clock */
/*
#centerclock { display: inline-block; position: relative; opacity: 0; font-weight: 500; }
#centerclock .format { position: absolute; left: 102%; bottom: 9%; font-size: 25px; opacity: 0; }
#centerclock .show { opacity: 1; -webkit-animation: fadeout 4s ease 4s 1 normal; -webkit-animation-fill-mode: forwards; }
#centerclock h1 { cursor: default; -webkit-user-select: none; -moz-user-select: none; }

#centerclock h1, #greeting h2, #introduction, #focus { text-align: center; line-height: 1; padding: 0; margin: 0; color: #fff; letter-spacing: -5px; font-size: 180px; font-weight: initial; }


/* Greeting */

//#greeting h2, #introduction, #focus { font-size: 54px; letter-spacing: 0; white-space: nowrap; }

//#greeting { margin-top: -2px; opacity: 0; }
//	#greeting .name { display: inline-block; max-width: 15em; margin: -5px 0; padding: 5px 0; border-top-left-radius: 1px; border-top-right-radius: 1px; cursor: default; outline: none; overflow: hidden; -webkit-user-select: none; user-select: none; vertical-align: top; }
//	#greeting .editing { min-width: 1.5em; margin-bottom: -8px; border-bottom: 3px solid #fff; cursor: auto; }
