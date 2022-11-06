'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Skeleton from './steps/Skeleton';

interface StableDiffusionImageProps {
  imageId?: string;
}

export default function StableDiffusionImage({
  imageId,
}: StableDiffusionImageProps) {
  const ref = useRef(false);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      fetch(`/api/generate${imageId ? '?imageId=' + imageId : ''}`)
        .then((res) => res.json())
        .then(({ output_url }) => {
          setUrl(output_url);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  return url ? (
    <Image src={url}
           width="512"
           height="512"
           alt="you"
           style={{ scale: '2', translate: '256px 256px' }} />
  ) : (
    <Skeleton />
  );
}
