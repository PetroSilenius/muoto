import Tag from 'app/app/steps/Tag';
import { questionType } from '@prisma/client';
import client from 'lib/prismadb';

async function fetchData(params: { type: questionType }) {
  const questionType = params.type;

  const question = await client.questions.findFirstOrThrow({
    where: {
      type: questionType,
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
  params: { type: questionType };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <form method="POST" action={`/api/wizard/${data.type}`}>
      <div className="space-y-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          {data.content}
        </h1>
        <p className="font-medium text-zinc-500">{data.description}</p>
        <div className="flex flex-row flex-wrap gap-4 ">
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
