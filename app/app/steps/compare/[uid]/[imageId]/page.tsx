import SelfieCamera from 'app/app/steps/compare/SelfieCamera';
import { Suspense } from 'react';
import StableDiffusionImage from 'app/app/StableDiffusionImage';
import Skeleton from 'app/app/steps/Skeleton';

export default async function Page({
  params,
}: {
  params: { imageId: string; uid: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <Suspense fallback={<Skeleton />}>
        {/* @ts-ignore */}
        <StableDiffusionImage userId={params.uid} imageId={params.imageId} />
      </Suspense>
      <SelfieCamera />
    </div>
  );
}
