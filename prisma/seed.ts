import { PrismaClient } from '@prisma/client';
import questions from "./seeders/questions";
import options from "./seeders/options";

const prisma = new PrismaClient();
async function main() {
  await questions(prisma);
  await options(prisma);
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
