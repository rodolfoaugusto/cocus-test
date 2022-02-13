import request from 'supertest';

const mockIsAnInteger = () => {
    return Math.floor(Math.random() * 99) + 1;
};

import app from '../../../src/app';
describe('Get triangle type on Triangle API [POST]', () => {
    it('Doing requests by different triangle side values', async () => {
        const response = await request(app)
            .post('/api/v1/triangle')
            .send({
                triangle: {
                    sideA: mockIsAnInteger(),
                    sideB: mockIsAnInteger(),
                    sideC: mockIsAnInteger(),
                },
            })
            .set('Authorization', `Bearer ${process.env.AUTH_TOKEN}`);
        expect(200).toBe(response.status);
    });

    it('When a empty body was sent, the response returns an error.', async () => {
        const response = await request(app)
            .post('/api/v1/triangle')
            .send('')
            .set('Authorization', `Bearer ${process.env.AUTH_TOKEN}`);
        expect(400).toBe(response.status);
    });
});
