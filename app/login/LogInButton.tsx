'use client';

import { signIn } from 'next-auth/react';

export default function LogInButton() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/app/steps/feeling' })}
      className="w-fit rounded-md bg-muoto-red p-2"
    >
      Sign in with Google
    </button>
  );
}
