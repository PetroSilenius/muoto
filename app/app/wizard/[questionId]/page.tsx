async function fetchData(params: { questionId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.questionId}`,
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { questionId: string };
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-zinc-200">{data.title}</h1>
      <p className="font-medium text-zinc-500">{data.body}</p>
    </div>
  );
}
