import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  console.log({ body });

  // Properly validate the data
  if (!body) {
    return res.status(400).json({ data: 'Missing body' });
  }

  if (body.confirm) {
    // Write to database
    res.redirect(307, `/app/wizard/compare`);
  }

  res.redirect(307, `/app/wizard/1`);
}
