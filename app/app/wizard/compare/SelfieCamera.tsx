'use client';

import { useRef } from 'react';

export default function SelfieCamera() {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  navigator.mediaDevices
    .getUserMedia({ video: { width: 300, facingMode: 'user' } })
    .then((stream) => {
      let video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        video.play();
      }
    });

  return (
    <video
      ref={videoRef}
      height="512"
      width="512"
      className="mt-4 rounded-lg border-4 border-slate-500"
    />
  );
}
