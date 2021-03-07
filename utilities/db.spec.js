const db = require('./db');

describe('DB methods', () => {
    test('should add data to db', () => {
        db.addData({"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"});
        expect(db.getData().length).toBe(1);
        expect(db.getData()[0]["name"]).toBe("Christina McArdle")
    });

    test('should sort data', () => {
        db.addData({"latitude": "52.986375", "user_id": 1, "name": "John McArdle", "longitude": "-6.043701"});
       db.sortById();
        expect(db.getData()[0]["name"]).toBe("John McArdle")
        expect(db.getData()[0]["user_id"]).toBe(1)
    })
})