const {greatDistance } = require('./greatCircleDistance')

describe('Calculate distance between 2 points', () => {
    test('should return distance', () => {
        const options = {lat1: 51.92893, lng1: -10.27699, lat2: 53.339428, lng2: -6.257664};
        const response = greatDistance(options)
        expect(Math.floor(response)).toEqual(313);
    })
})