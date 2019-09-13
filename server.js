// Install express server
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/bulky'));

 
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/bulky/index.html'));
});
console.log('console')
