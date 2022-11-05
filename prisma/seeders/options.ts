import type { PrismaClient } from '@prisma/client';
import feeling from './options/feeling';
import negativeTrait from './options/negativeTrait';
import positiveTrait from './options/positiveTrait';

export default async function options(prisma: PrismaClient) {
  await feeling(prisma);
  await negativeTrait(prisma);
  await positiveTrait(prisma);
}
