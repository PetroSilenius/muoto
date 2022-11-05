'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SelfieCamera() {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const router = useRouter();

  if (typeof navigator !== 'undefined') {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300, facingMode: 'user' } })
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      });
  }

  useEffect(() => {
    const video = videoRef.current;
    const redirectAfter = setTimeout(() => {
      router.push('/app/dashboard');
    }, 15000);

    return () => {
      clearTimeout(redirectAfter);
      if (video && video.srcObject && 'getTracks' in video.srcObject) {
        video.srcObject?.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [router]);

  return (
    <video
      ref={videoRef}
      height="512"
      width="512"
      className="mt-4 rounded-lg border-4 border-slate-500"
    />
  );
}
