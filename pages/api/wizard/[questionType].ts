import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionType = req.query.questionType;
  const body = req.body;

  const chosenOptions = Object.keys(body);

  console.log({ chosenOptions });

  // Properly validate the data
  if (!body || !questionType || questionType instanceof Array) {
    return res.status(400).json({ data: 'Missing body' });
  }

  // Write to database
  res.redirect(302, `/app/wizard/${questionType}`);
}
