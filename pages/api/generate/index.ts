import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.DEEP_AI_API_KEY!;
const DEEP_AI_URL = process.env.DEEP_AI_URL!;
// Form submission boundary
const BOUNDARY_IDENTIFIER='----WebKitFormBoundaryVwY2yVS0CJe4Onk5'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const headers= new Headers();
    headers.set('Api-Key', API_KEY);
    headers.set('Content-Type', `multipart/form-data; boundary=${BOUNDARY_IDENTIFIER}`)

    // @TODO: gather question answerers from the database and create a string with the values
    const text = 'Darth Vader on bike'

    const deepAIResponse = await fetch(DEEP_AI_URL, {
        headers,
        body:`--${BOUNDARY_IDENTIFIER}\r\nContent-Disposition: form-data; name="text"\r\n\r\n${text}\r\n--${BOUNDARY_IDENTIFIER}--`,
        method: 'POST',
    });

    return res.status(200).json(await deepAIResponse.json());
}