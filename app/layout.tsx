import '@/styles/globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <title>muoto</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </head>
      <body className="overflow-y-scroll bg-muoto-blue">
        <div className="grid min-h-screen grid-cols-[min(800px,100%)] place-content-center py-8	">
          {children}
        </div>
      </body>
    </html>
  );
}
