const https = require('https');
const fs = require('fs');
setInterval(function() {
    http.get("https://king-serv.herokuapp.com/");
}, 300000).on('error', (e) => {
  console.error(e);
});
