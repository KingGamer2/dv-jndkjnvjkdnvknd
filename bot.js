var http = require("http");
setInterval(function() {
    http.get("https://king-serv.herokuapp.com/");
}, 300000)
