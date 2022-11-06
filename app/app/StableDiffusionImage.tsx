import generateImage from '@/lib/generate';
import Image from 'next/image';

interface StableDiffusionImageProps {
  imageId?: string;
}

export default async function StableDiffusionImage({
  imageId,
}: StableDiffusionImageProps) {
  const { output_url } = await generateImage(imageId);

  return <Image src={output_url} width="512" height="512" alt="you" />;
}
