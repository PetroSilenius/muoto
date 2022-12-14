import questions from './seeders/questions';
import options from './seeders/options';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function main() {
  await questions(client);
  await options(client);
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
