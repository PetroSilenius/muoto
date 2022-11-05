import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.questions.upsert({
    where: { id: '0752a1c0-d2ec-4f43-bd77-3324c91e59bd' },
    update: {},
    create: {
      id: '0752a1c0-d2ec-4f43-bd77-3324c91e59bd',
      type: 'ACTIVITY',
      content: 'What`s your activity level?',
      description: 'Describe how active you are feeling today',
    },
  });
  await prisma.questions.upsert({
    where: { id: 'bca9aab2-9d7b-4d2d-bac5-1313920e84c3' },
    update: {},
    create: {
      id: 'bca9aab2-9d7b-4d2d-bac5-1313920e84c3',
      type: 'POSITIVE_TRAIT',
      content: 'Pick the things about yourself that you`re proud of',
      description: 'You can pick more than one',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
