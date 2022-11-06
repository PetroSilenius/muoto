import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-4 flex flex-col rounded-md bg-muoto-dark p-4 text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>

        <Link
          href="/app/steps/feeling"
          className="rounded-lg bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-100 hover:bg-zinc-500 hover:text-white"
        >
          See how you feel
        </Link>
      </div>
      {children}
    </div>
  );
}
