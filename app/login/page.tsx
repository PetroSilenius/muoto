// import { getSession } from '@/lib/session';
import LogInButton from './LogInButton';
// import { redirect } from 'next/navigation';

export default async function Page() {
  // const session = await getSession();
  // if (session) {
  //   redirect('/app/dashboard');
  // }

  return (
    <div className="flex flex-col items-center space-y-8 text-center text-white">
      <LogInButton />
    </div>
  );
}
