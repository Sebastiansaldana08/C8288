import handler from 'pages/api/v1/weather/[zipcode]';
import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';

describe("API v1/weather/[zipcode]", () => {
    it("returns weather data for a valid 5-digit zipcode", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: {
                zipcode: '12345',  
            },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData()).toEqual({
            zipcode: '12345',
            weather: 'sunny',
            temp: 35,
        });
    });

    it("returns a 400 error for an invalid zipcode", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: {
                zipcode: '123',  
            },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(400);
        expect(res._getJSONData()).toEqual({
            error: "Invalid zipcode",
        });
    });

    it("returns a 400 error if no zipcode is provided", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: {},  
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(400);
        expect(res._getJSONData()).toEqual({
            error: "Invalid zipcode",
        });
    });
});
