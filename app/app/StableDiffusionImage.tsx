import generateImage from '@/lib/generate';
import Image from 'next/image';

interface StableDiffusionImageProps {
  userId: string;
  imageId?: string;
}

export default async function StableDiffusionImage({
  userId,
  imageId,
}: StableDiffusionImageProps) {
  const { output_url } = await generateImage(userId, imageId);

  return (
    <Image
      src={output_url}
      width="512"
      height="512"
      alt="you"
      style={{ scale: '2', translate: '256px 256px' }}
    />
  );
}
