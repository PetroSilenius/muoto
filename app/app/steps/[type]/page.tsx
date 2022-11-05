import Tag from 'app/app/steps/Tag';
import { PrismaClient } from '@prisma/client';
import { QuestionTypeOrder } from 'pages/api/steps/[type]';
// import client from 'lib/prismadb';

async function fetchData(type: any) {
  const client = new PrismaClient();

  const question = await client.questions.findFirstOrThrow({
    where: {
      type,
    },
    include: {
      options: true,
    },
  });

  return question;
}

export default async function Page({
  params,
}: {
  params: { type: any };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params.type);

  return (
    <form method="POST" action={`/api/steps/${data.type}`}>
      <div className="space-y-4 px-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          {data.content}
        </h1>
        <p className="font-medium text-zinc-500">{data.description}</p>
        <div className="flex flex-row flex-wrap gap-4 ">
          <input type="hidden" name="questionId" value={data.id} />
          {data?.options?.map((option) => (
            <div key={option?.id}>
              <Tag option={option} />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="float-right my-16 rounded bg-muoto-orange py-2 px-4 font-bold"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </form>
  );
}

export async function generateStaticParams() {
  const questionTypes = ['feeling', 'positive_trait', 'negative_trait'];
  return questionTypes.map((type) => ({
    type: type,
  }));
}
