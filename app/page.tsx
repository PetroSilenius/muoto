import LogInButton from './LogInButton';

export default async function Page() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <p className="text-shadow  text-muoto-light">
          Are you ready to improve your self-image?
        </p>
        <p className="text-shadow block text-muoto-dark ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's start using muoto
        </p>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-black sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        When you work on your physical appearance you see visual results, why
        can’t it be the same when you work on your mental health?
      </p>
      <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <LogInButton className="flex w-full items-center justify-center rounded-md border border-transparent bg-muoto-dark px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg">
            Get started
          </LogInButton>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <LogInButton className="flex w-full items-center justify-center rounded-md border border-transparent bg-muoto-light px-8 py-3 text-base font-medium text-muoto-dark md:py-4 md:px-10 md:text-lg">
            Log in
          </LogInButton>
        </div>
      </div>
    </div>
  );
}
