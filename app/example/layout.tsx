import '@/styles/globals.css';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function Layout({ children }: { children: any }) {
  return (
    <div className="grid grid-cols-[minmax(1fr,240px),1fr] py-8">
      <div className="col-start-2">
        <GlobalNav />
      </div>

      <div className="col-start-3 ">
        <AddressBar />

        <div className="rounded-xl border border-zinc-800 bg-black p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
