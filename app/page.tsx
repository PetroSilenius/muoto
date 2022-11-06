import Link from 'next/link';

export default async function Page() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="text-shadow block text-muoto-light xl:inline">
          Are you ready to improve your self-image?
        </span>
        <span className="block text-shadow text-muoto-dark xl:inline">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's start using muoto
        </span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-black sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        When you work on your physical appearance you see visual results, why
        can’t it be the same when you work on your mental health?
      </p>
      <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link
            href="/login"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-muoto-dark px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            href="/login"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-muoto-light px-8 py-3 text-base font-medium text-muoto-dark md:py-4 md:px-10 md:text-lg"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
  /* return (
    <div classNameName="flex flex-col items-center space-y-8 text-center text-white">
      <h1 classNameName="text-6xl">Welcome to muoto</h1>
      <p classNameName="text-2xl">Are you ready to improve your self-image?</p>
      <Link href="/login" classNameName="text-muoto-dark underline">
        Log in
      </Link>
    </div>
  );
   */
}
