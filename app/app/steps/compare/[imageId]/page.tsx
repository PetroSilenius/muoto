import SelfieCamera from 'app/app/steps/compare/SelfieCamera';
import StableDiffusionImage from 'app/app/StableDiffusionImage';

export default async function Page({
  params,
}: {
  params: { imageId: string; uid: string };
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-shadow text-4xl font-medium text-muoto-orange">
        Is your perception realistic?
      </h1>
      <div
        className="relative overflow-hidden"
        style={{ width: '512px', height: '512px' }}
      >
        <StableDiffusionImage imageId={params.imageId} />
      </div>
      <SelfieCamera />
    </div>
  );
}
