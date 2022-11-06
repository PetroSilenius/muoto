import { Suspense } from 'react';
import StableDiffusionImage from 'app/app/StableDiffusionImage';
import Skeleton from 'app/app/steps/Skeleton';

export default async function Page({
  searchParams,
}: any) {
  return (
    <form method="POST" action={`/api/steps/result`}>
      <div className="space-y-4">
        <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
          Does this image portray you?
        </h1>
        <Suspense fallback={<Skeleton />}>
          {/* @ts-ignore */}
          <StableDiffusionImage userId={searchParams.uid} />
        </Suspense>

        <div className="flex flex-row gap-4 ">
          {['Yes', 'No'].map((option) => {
            return (
              <button
                type="submit"
                name="confirm"
                value={option}
                key={option}
                className="rounded bg-muoto-light py-2 px-4 font-medium text-muoto-dark transition-colors hover:bg-muoto-dark hover:text-muoto-light"
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
}
