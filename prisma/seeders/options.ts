import type { PrismaClient } from '@prisma/client';
import activity from './options/activity';
import negativeTrait from './options/negativeTrait';
import positiveTrait from './options/positiveTrait';

export default async function options(prisma: PrismaClient) {
  await activity(prisma);
  await negativeTrait(prisma);
  await positiveTrait(prisma);
}
