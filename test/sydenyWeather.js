const request = require('supertest');
const expect = require("chai").expect;

describe('Dummy test', () => {

    it('if query api with city id then should return the correct city meta data', async () => {
        const response = await request('https://api.weatherbit.io')
            .get('/v2.0/forecast/daily?city_id=2147714&key=86b3400d1e914aae972f9f02361c6049')

        let resp = response.body
        expect(resp.timezone).to.equal('Australia/Sydney')
        expect(resp.city_name).to.equal('Sydney')
        expect(resp.country_code).to.equal('AU')
    });
});
