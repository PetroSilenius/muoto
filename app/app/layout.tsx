import { getSession } from '@/lib/session';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie'));
  if (!session) {
    redirect('/login');
  }

  return children;
}
