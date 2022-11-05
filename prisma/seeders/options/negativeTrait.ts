import { NEGATIVE_TRAIT_UUID } from '../questions';
import { PrismaClient } from '@prisma/client';

export default async function negativeTrait(prisma: PrismaClient) {
  await prisma.options.upsert({
    where: { id: 'ac4594e5-b779-4df9-9261-4435335ff2cc' },
    update: {},
    create: {
      id: 'ac4594e5-b779-4df9-9261-4435335ff2cc',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Scar on your body',
    },
  });

  await prisma.options.upsert({
    where: { id: '77b25d7e-7b5b-4d3a-a373-b2037485c3e5' },
    update: {},
    create: {
      id: '77b25d7e-7b5b-4d3a-a373-b2037485c3e5',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Receding hairline',
    },
  });

  await prisma.options.upsert({
    where: { id: 'dcb45988-3f7c-4851-966b-8d2c3aaab2c7' },
    update: {},
    create: {
      id: 'dcb45988-3f7c-4851-966b-8d2c3aaab2c7',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Large hands',
    },
  });

  await prisma.options.upsert({
    where: { id: '30c3eaf7-6552-43f5-94f9-4af486c52150' },
    update: {},
    create: {
      id: '30c3eaf7-6552-43f5-94f9-4af486c52150',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Large ears',
    },
  });

  await prisma.options.upsert({
    where: { id: 'ee119c66-fb30-4fe2-89e5-05907f18bd07' },
    update: {},
    create: {
      id: 'ee119c66-fb30-4fe2-89e5-05907f18bd07',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Large nose',
    },
  });

  await prisma.options.upsert({
    where: { id: 'fd8fd8c3-cfef-4934-a9d2-3847177bf928' },
    update: {},
    create: {
      id: 'fd8fd8c3-cfef-4934-a9d2-3847177bf928',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Small eyes',
    },
  });

  await prisma.options.upsert({
    where: { id: 'a23de681-8965-4d7f-8661-b4edbf96f448' },
    update: {},
    create: {
      id: 'a23de681-8965-4d7f-8661-b4edbf96f448',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Oly skin',
    },
  });

  await prisma.options.upsert({
    where: { id: '9811a596-8f77-4dde-a474-bce381c83957' },
    update: {},
    create: {
      id: '9811a596-8f77-4dde-a474-bce381c83957',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Your form',
    },
  });

  await prisma.options.upsert({
    where: { id: '9f0292b0-9a91-4eb9-81f1-14aeb09f6c7e' },
    update: {},
    create: {
      id: '9f0292b0-9a91-4eb9-81f1-14aeb09f6c7e',
      question_id: NEGATIVE_TRAIT_UUID,
      content: 'Your fitness level',
    },
  });
}
