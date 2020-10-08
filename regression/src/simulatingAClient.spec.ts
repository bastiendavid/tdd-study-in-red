import Server from './server';
import request = require('superagent');

describe('The server', () => {

    let server: Server;
    let port: number;

    beforeEach(async () => {
        server = new Server();
        port = Math.floor(Math.random() * 1000 + 3000);
        await server.start(port);
    });

    afterEach(async () => {
        await server.stop();
    });

    test('adds a list of numbers', async () => {
        let response = await request.post(`http://localhost:${port}/count/add`).send([1, 2]);
        expect(response.status).toBe(200);
        response = await request.post(`http://localhost:${port}/count/add`).send([]);
        expect(response.status).toBe(200);
    });
});
