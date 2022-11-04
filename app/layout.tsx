import '@/styles/globals.css';
import AddressBar from '@/ui/AddressBar';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-muoto-blue">
        <div className="grid grid-cols-[min(800px,100%)] place-content-center py-8">
          <div className="rounded-xl border border-zinc-800 bg-black p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
