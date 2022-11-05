import Image from 'next/image';
import SelfieCamera from 'app/app/steps/compare/SelfieCamera';
import { SkeletonCard } from '@/ui/SkeletonCard';
import { Suspense } from 'react';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/generate');
  const out = await res.json()
  console.log(out);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <Suspense fallback={<SkeletonCard />}>
        <Image src={out.output_url} width="512" height="512" alt="you" />
      </Suspense>
      <SelfieCamera />
    </div>
  );
}
