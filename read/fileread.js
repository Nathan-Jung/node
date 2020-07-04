var fs = require('fs');
fs.readFile('main1.js', 'utf8', function(err, data){
  console.log(data);
});
