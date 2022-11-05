async function fetchData(params: { questionId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.questionId}`,
  );
  type Post = { title: string; body: string };
  const data: Post = await res.json();

  return {
    ...data,
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
  params: { questionId: string };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <form method="POST" action={`/api/wizard/${params.questionId}`}>
      <div className="space-y-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          {data.title}
        </h1>
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
                  className="cursor-pointer rounded bg-muoto-light py-2 px-4 font-medium text-muoto-dark transition-colors peer-checked:bg-muoto-dark peer-checked:text-muoto-light"
                >
                  {option.value}
                </label>
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
