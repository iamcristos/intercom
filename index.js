const {textReader, writeToFile} = require('./utilities/fileHandler');
const db = require('./utilities/db');


(async function home() {
    try {
        db.newInstance()
        await textReader();
        db.sortById();
        writeToFile(db.getData(), './output.txt')
        console.log('done writting here')
    } catch (error) {
        console.error(error);
    }
})()