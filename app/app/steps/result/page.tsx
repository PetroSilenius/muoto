import Image from 'next/image';

export default async function Page() {
  return (
    <form method="POST" action={`/api/wizard/result`}>
      <div className="space-y-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          Does this image portray you?
        </h1>
        <Image
          src="https://source.unsplash.com/featured/512x512"
          width="512"
          height="512"
          alt="you"
        />

        <div className="flex flex-row gap-4 ">
          {['Yes', 'No'].map((option) => {
            return (
              <button
                type="submit"
                name="confirm"
                value={option}
                key={option}
                className="rounded bg-muoto-light py-2 px-4 font-medium text-muoto-dark transition-colors hover:bg-muoto-dark hover:text-muoto-light"
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
}
