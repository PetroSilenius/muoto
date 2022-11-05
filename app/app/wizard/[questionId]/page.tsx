async function fetchData(params: { questionId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.questionId}`,
  );
  const data = await res.json();

  return {
    ...data,
    options: [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ],
  };
}

export default async function Page({
  params,
}: {
  params: { questionId: string };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <form method="POST" action={`/api/wizard/${params.questionId}`}>
      <div className="space-y-4">
        <h1 className="text-2xl font-medium text-zinc-200">{data.title}</h1>
        <p className="font-medium text-zinc-500">{data.body}</p>
        <div className="flex flex-row gap-4 ">
          {data.options.map((option) => {
            return (
              <div key={option.id}>
                <input
                  type="checkbox"
                  name={`answer-${option.id}`}
                  id={`answer-${option.id}`}
                  className="peer hidden"
                />
                <label
                  htmlFor={`answer-${option.id}`}
                  className="cursor-pointer rounded bg-muoto-red py-2 px-4 font-medium text-muoto-dark peer-checked:bg-muoto-dark peer-checked:text-muoto-red"
                >
                  {option.value}
                </label>
              </div>
            );
          })}
        </div>
        <button type="submit" className="bg-muoto-red">
          Submit
        </button>
      </div>
    </form>
  );
}
