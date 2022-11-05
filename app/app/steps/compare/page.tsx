import Image from 'next/image';
import SelfieCamera from 'app/app/steps/compare/SelfieCamera';
import { SkeletonCard } from '@/ui/SkeletonCard';
import { Suspense } from 'react';
import generateImage from '@/lib/generate';

export default async function Page() {
  const { output_url, text, ...all } = await generateImage();
  console.debug(text, all);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <Suspense fallback={<SkeletonCard />}>
        <Image src={output_url} width="512" height="512" alt="you" />
      </Suspense>
      <SelfieCamera />
    </div>
  );
}
