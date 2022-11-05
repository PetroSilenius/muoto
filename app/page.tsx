import Link from 'next/link';

export default async function Page() {
  return (
    <div className="flex flex-col items-center space-y-8 text-center text-white">
      <h1 className="text-6xl">Welcome to muoto</h1>
      <p className="text-2xl">Are you ready to improve your self-image?</p>
      <Link href="/login" className="text-muoto-dark underline">
        Log in
      </Link>
    </div>
  );
}
