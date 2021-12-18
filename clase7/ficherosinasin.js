const fs = require('fs');
fs.readFile('./angela.txt', 'utf-8', function(data, err){
    if(data){
        console.log(data);
    } else{
        console.error(err);
    }
});