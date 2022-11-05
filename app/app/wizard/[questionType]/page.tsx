import Tag from 'app/app/wizard/Tag';
import { PrismaClient, questionType } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchData(params: { questionType: questionType }) {
  const question = await prisma.questions.findFirst({
    where: {
      type: params.questionType,
    },
  });
  console.log(params.questionType, question);

  return {
    ...question,
    options: [
      { id: 1, value: 'Arms' },
      { id: 2, value: 'Nose' },
      { id: 3, value: 'Eyebrows' },
    ],
  };
}

export default async function Page({
  params,
}: {
  params: { questionType: questionType };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <form method="POST" action={`/api/wizard/${params.questionType}`}>
      <div className="space-y-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          {data.content}
        </h1>
        <p className="font-medium text-zinc-500">{data.description}</p>
        <div className="flex flex-row gap-4 ">
          <input type="hidden" name="questionId" value={data.id} />
          {data.options.map((option) => {
            return (
              <div key={option.id}>
                <Tag option={option} />
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="float-right my-4 rounded bg-muoto-orange py-2 px-4 font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
