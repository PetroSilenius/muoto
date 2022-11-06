import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'lib/prismadb';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export enum QuestionTypeOrder {
  feeling,
  positive_trait,
  negative_trait,
  result,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const questionType = req.query.type;
  const body = req.body;

  // Properly validate the data
  if (!body || !questionType || questionType instanceof Array) {
    return res.status(400).json({ data: 'Missing body' });
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ data: 'Unauthorized' });
  }

  const { questionId, ...options } = body;
  const chosenOptions = Object.keys(options);

  await client.answers.create({
    data: {
      value: chosenOptions,
      questions: { connect: { id: questionId } },
      user: { connect: { id: session.user.id } },
    },
  });

  const nextQuestionType =
    QuestionTypeOrder[
      QuestionTypeOrder[questionType as keyof typeof QuestionTypeOrder] + 1
    ];

  res.redirect(302, `/app/steps/${nextQuestionType}`);
}
