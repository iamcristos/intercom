const fs = require('fs');


module.exports = function(data, filename) {
    var file = fs.createWriteStream(filename);
    file.on('error', function(err) { 
        console.error(err)
     });
    data.forEach(function(v) { 
        const item = {name: v.name, user_id: v.user_id}
        file.write(JSON.stringify(item) + '\n'); 
    });
    file.end();
    return;
}