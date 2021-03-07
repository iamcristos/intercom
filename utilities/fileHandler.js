const fs = require('fs');
const readline = require('readline');
const db = require('./db');
const { lat2, lng2, distance} = require('./constant');

const { greatDistance } = require('./greatCircleDistance');

const filename = process.argv[2] || '../customer.txt';

const readInterface = readline.createInterface({
    input: fs.createReadStream(filename),
    console: false
});
/**
 *reads customer.txt
 *save customers around 100km
 * @returns
 */
async  function textReader() {
  
    return new Promise(resolve => readInterface.on('line', function(line) {
        const data = JSON.parse(line)
        const {latitude, longitude} = data;
        const options = {lat1: latitude, lng1: longitude, lat2, lng2}
       if(greatDistance(options) >= distance) {
            db.addData(data)
        }
        return resolve(line)
}));
}
/**
 *writes customers around 100km to output.txt
 *
 * @param {*} data
 * @param {*} filename
 * @returns
 */
function writeToFile(data, filename) {
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

module.exports = {textReader, writeToFile}