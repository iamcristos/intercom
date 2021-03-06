const fs = require('fs');
const readline = require('readline');
const db = require('./db');

const { greatDistance } = require('./greatCircleDistance');

const filename = process.argv[2] || '../customer.txt';

const readInterface = readline.createInterface({
    input: fs.createReadStream(filename),
    // output: process.stdout,
    console: false
});


module.exports = async function() {
    db.newInstance()
    return new Promise(resolve => readInterface.on('line', function(line) {
        const data = JSON.parse(line)
        const {latitude, longitude} = data;
        const options = {lat1: latitude, lng1: longitude, lat2: 53.339428, lng2: -6.257664}
       if(greatDistance(options) >= 100) {
            db.addData(data)
        }
        return resolve(true)
}));
}