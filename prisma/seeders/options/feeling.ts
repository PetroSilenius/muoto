import { FEELING_UUID } from '../questions';
import { PrismaClient } from '@prisma/client';

export default async function feeling(prisma: PrismaClient) {
  await prisma.options.upsert({
    where: { id: 'd2d569ed-fecd-4de0-8ff2-489c57f3c7a5' },
    update: {},
    create: {
      id: 'd2d569ed-fecd-4de0-8ff2-489c57f3c7a5',
      question_id: FEELING_UUID,
      content: '🥳',
    },
  });

  await prisma.options.upsert({
    where: { id: 'eb369c9f-38b7-4a10-a3fd-5c35c204e72e' },
    update: {},
    create: {
      id: 'eb369c9f-38b7-4a10-a3fd-5c35c204e72e',
      question_id: FEELING_UUID,
      content: '😊',
    },
  });

  await prisma.options.upsert({
    where: { id: 'c06cd26b-f2f2-46c0-ac26-80dbff8ed462' },
    update: {},
    create: {
      id: 'c06cd26b-f2f2-46c0-ac26-80dbff8ed462',
      question_id: FEELING_UUID,
      content: '🥱',
    },
  });

  await prisma.options.upsert({
    where: { id: 'af93cd3d-4ccc-4674-af23-109694c8aa25' },
    update: {},
    create: {
      id: 'af93cd3d-4ccc-4674-af23-109694c8aa25',
      question_id: FEELING_UUID,
      content: '😕',
    },
  });

  await prisma.options.upsert({
    where: { id: '4754c258-a067-4249-a35d-5ae15cbf4c04' },
    update: {},
    create: {
      id: '4754c258-a067-4249-a35d-5ae15cbf4c04',
      question_id: FEELING_UUID,
      content: '😖',
    },
  });
}
