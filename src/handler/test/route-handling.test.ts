import request from 'supertest';

import { modal } from '../../Db/mongodb/schema';
import { app } from "../../router/routes"
describe('Unit cases', () => {
    test('createData should return data', async () => {
        modal.create = jest.fn().mockResolvedValue({ 'name': "test", description: "wait" });
        const response = await request(app)
            .post('/api')
            .send({
                name: 'test',
                description: 'wait',
            });

        expect(response.status).toBe(200);
    });
    test('createData with invalid data', async () => {
        modal.create = jest.fn().mockResolvedValue({ "name": "test" })
        const response = await request(app)
            .post('/api')
            .send({
                name: 'test',

            });

        expect(response.status).toBe(400);
    });
    test('createData with invalid data', async () => {
        modal.create = jest.fn().mockResolvedValue({})
        const response = await request(app)
            .post('/api')
            .send({


            });

        expect(response.status).toBe(400);
    });
});
