import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'lib/prismadb';

enum QuestionTypeOrder {
  ACTIVITY = 1,
  POSITIVE_TRAIT = 2,
  NEGATIVE_TRAIT = 3,
  result = 4,
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionType = req.query.questionType;
  const body = req.body;

  // Properly validate the data
  if (!body || !questionType || questionType instanceof Array) {
    return res.status(400).json({ data: 'Missing body' });
  }

  const chosenOptions = Object.keys(body);

  client.answers.create({
    data: {
      question_id: body.question_id,
      value: chosenOptions,
      user_id: '123',
    },
  });

  const nextQuestionType =
    QuestionTypeOrder[
      QuestionTypeOrder[questionType as keyof typeof QuestionTypeOrder] + 1
    ];

  res.redirect(302, `/app/wizard/${nextQuestionType}`);
}
