import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  // Properly validate the data
  if (!body) {
    return res.status(400).json({ data: 'Missing body' });
  }

  let redirectUrl = '/app/steps/feeling';
  if (body.confirm === 'Yes') {
    // Write to database
    redirectUrl = '/app/steps/compare';
  }

  res.redirect(303, redirectUrl);
}
