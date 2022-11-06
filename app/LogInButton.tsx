'use client';

import { signIn } from 'next-auth/react';

export default function LogInButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/app/steps/feeling' })}
      className={className}
    >
      {children}
    </button>
  );
}
