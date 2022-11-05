import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

enum QuestionTypeOrder {
  activity,
  positive_trait,
  negative_trait,
  result,
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionType = req.query.type;
  const body = req.body;

  // Properly validate the data
  if (!body || !questionType || questionType instanceof Array) {
    return res.status(400).json({ data: 'Missing body' });
  }

  const chosenOptions = Object.keys(body);

  prisma.answers.create({
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
