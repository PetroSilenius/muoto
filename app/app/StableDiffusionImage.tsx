import generateImage from '@/lib/generate';
import Image from 'next/image';

export default async function StableDiffusionImage() {
  const { output_url, text, ...all } = await generateImage();
  console.debug(text, all);
  return <Image src={output_url} width="512" height="512" alt="you" />;
}
