const textReader = require('./utilities/textReader');
const writeToFile = require('./utilities/writeToFile');
const db = require('./utilities/db');

(async function home() {
    try {
        const obj = {};
        await textReader();
        db.sortById();
        // db.getData().forEach(item => {

        // })
        writeToFile(db.getData(), './output.txt')
        console.log('done writting here')
    } catch (error) {
        console.error(error);
    }
})()