const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Rich đã hoạt động`)
})
 
function keepAlive() {
  server.listen(8080, () => { console.log("Server đã hoạt động" + Date.now()) });
}
 
module.exports = keepAlive;