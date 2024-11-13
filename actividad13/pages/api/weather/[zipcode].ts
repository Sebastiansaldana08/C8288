import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    const zipcode = req.query.zipcode as string;

    if (!zipcode || zipcode.length !== 5) {
        return res.status(400).json({ error: "Invalid zipcode" });
    }

    return res.status(200).json({
        zipcode,
        weather: "sunny",
        temp: 35,
    });
}
