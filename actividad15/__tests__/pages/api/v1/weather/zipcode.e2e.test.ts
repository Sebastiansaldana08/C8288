/**
 * @jest-environment node
 */

jest.setTimeout(20000); // Aumenta el tiempo de espera a 20 segundos

describe("The API /v1/weather/[zipcode]", () => {
    test("returns the correct data for the zipcode 96815", async () => {
        const zip = "96815";
        const response = await fetch(`http://localhost:3000/api/v1/weather/${zip}`);
        const body = await response.json();
        expect(body.zipcode).toEqual(zip);
    });
});

export {};
