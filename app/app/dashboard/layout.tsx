import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-4 flex flex-col rounded-md p-4 text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>

        <Link
          href="/app/steps/feeling"
          className="rounded-lg bg-muoto-red px-3 py-1 text-sm font-medium text-white "
        >
          See how you feel
        </Link>
      </div>
      {children}
    </div>
  );
}
