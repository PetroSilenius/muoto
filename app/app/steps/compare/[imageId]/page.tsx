import SelfieCamera from 'app/app/steps/compare/SelfieCamera';
import { Suspense } from 'react';
import StableDiffusionImage from '../../../StableDiffusionImage';
import Skeleton from '../../Skeleton';

export default async function Page({
  params,
  searchParams,
}: {
  searchParams: { uid: string };
  params: { imageId: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <Suspense fallback={<Skeleton />}>
        {/* @ts-ignore */}
        <StableDiffusionImage
          userId={searchParams.uid}
          imageId={params.imageId}
        />
      </Suspense>
      <SelfieCamera />
    </div>
  );
}
