import type { PrismaClient } from '@prisma/client';

export const FEELING_UUID = '0752a1c0-d2ec-4f43-bd77-3324c91e59bd';
export const POSITIVE_TRAIT_UUID = 'bca9aab2-9d7b-4d2d-bac5-1313920e84c3';
export const NEGATIVE_TRAIT_UUID = 'd2118da2-714b-47a0-87d1-49c6cf95c388';

export default async function questions(prisma: PrismaClient) {
  await prisma.questions.upsert({
    where: { id: FEELING_UUID },
    update: {},
    create: {
      id: FEELING_UUID,
      type: 'feeling',
      content: 'How are you feeling about yourself today?',
      description:
        'Pick an emotion that best describes how you feel about yourself today',
    },
  });
  await prisma.questions.upsert({
    where: { id: POSITIVE_TRAIT_UUID },
    update: {},
    create: {
      id: POSITIVE_TRAIT_UUID,
      type: 'positive_trait',
      content: 'Pick the things about yourself that you`re proud of',
      description: 'Be proud of yourself!',
    },
  });
  await prisma.questions.upsert({
    where: { id: NEGATIVE_TRAIT_UUID },
    update: {},
    create: {
      id: NEGATIVE_TRAIT_UUID,
      type: 'negative_trait',
      content: 'Select the things that you don`t like so much about you',
      description:
        'Don` worry, we all have things we don`t like about ourselves',
    },
  });
}
