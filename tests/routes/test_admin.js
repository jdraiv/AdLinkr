/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const request = require('supertest');
const {app, server} = require('../../app/server');

after(() => {
    server.close();
});

describe('Routes: Admin', () => {
    it('Should serve 200 on successful route', (done) => {
        request(app)
            .get('/admin')
            .expect(200, done);
    });
});
