import client from 'lib/prismadb';

async function main() {
  await client.questions.upsert({
    where: { id: '0752a1c0-d2ec-4f43-bd77-3324c91e59bd' },
    update: {},
    create: {
      id: '0752a1c0-d2ec-4f43-bd77-3324c91e59bd',
      type: 'ACTIVITY',
      content: 'What`s your activity level?',
      description: 'Describe how active you are feeling today',
    },
  });
  await client.questions.upsert({
    where: { id: 'bca9aab2-9d7b-4d2d-bac5-1313920e84c3' },
    update: {},
    create: {
      id: 'bca9aab2-9d7b-4d2d-bac5-1313920e84c3',
      type: 'POSITIVE_TRAIT',
      content: 'Pick the things about yourself that you`re proud of',
      description: 'Be proud of yourself!',
    },
  });
  await client.questions.upsert({
    where: { id: 'd2118da2-714b-47a0-87d1-49c6cf95c388' },
    update: {},
    create: {
      id: 'd2118da2-714b-47a0-87d1-49c6cf95c388',
      type: 'NEGATIVE_TRAIT',
      content: 'Select the things that you don`t like so much about you',
      description:
        'Don` worry, we all have things we don`t like about ourselves',
    },
  });
}
main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
