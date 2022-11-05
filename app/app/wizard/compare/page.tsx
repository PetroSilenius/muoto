import Image from 'next/image';
import SelfieCamera from 'app/app/wizard/compare/SelfieCamera';

export default async function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <Image
        src="https://source.unsplash.com/featured/512x512"
        width="512"
        height="512"
        alt="you"
      />
      <SelfieCamera />
    </div>
  );
}
