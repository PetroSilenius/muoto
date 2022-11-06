'use client';

import '@/styles/globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>muoto</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </head>
      <body
        className={`overflow-y-scroll ${
          pathname?.includes('dashboard') ? 'bg-muoto-dark' : 'bg-muoto-blue'
        }`}
      >
        <div className="grid min-h-screen grid-cols-[min(800px,100%)] place-content-center">
          {children}
        </div>
      </body>
    </html>
  );
}
