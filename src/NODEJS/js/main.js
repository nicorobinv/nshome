(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

if (nickname === null) {
  body.className = "LOGGED_OUT";
} else {
  body.className = "LOGGED_IN";
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTIyMWVjMzguanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBRUEsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkgsRUFBQUEsSUFBSSxDQUFDUSxTQUFMLEdBQWlCLFlBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xSLEVBQUFBLElBQUksQ0FBQ1EsU0FBTCxHQUFpQixXQUFqQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIik7XHJcblxyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBcIkxPR0dFRF9PVVRcIjtcclxufSBlbHNlIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IFwiTE9HR0VEX0lOXCI7XHJcbn1cclxuIl19
},{}]},{},[1])