import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionId = req.query.questionId;
  const body = req.body;

  const chosenOptions = Object.keys(body);

  console.log({ chosenOptions });

  // Properly validate the data
  if (!body || !questionId || questionId instanceof Array) {
    return res.status(400).json({ data: 'Missing body' });
  }

  // Write to database
  res.redirect(307, `/app/wizard/${parseInt(questionId) + 1}`);
}
