"use client";

import Image from "next/image";
import { useState } from "react";

type CaseVideoPlayerProps = {
  poster?: string;
  src: string;
  title: string;
};

export function CaseVideoPlayer({ poster, src, title }: CaseVideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(!poster);
  const [imgError, setImgError] = useState(false);

  if (!isLoaded && poster) {
    return (
      <button
        aria-label={`Play ${title}`}
        className="case-video-poster-button"
        onClick={() => setIsLoaded(true)}
        type="button"
      >
        {imgError ? (
          <span className="case-video-poster-fallback">thumbnail</span>
        ) : (
          <Image
            alt={title}
            className="case-video-poster"
            fill
            loading="lazy"
            onError={() => setImgError(true)}
            sizes="(max-width: 900px) 100vw, 760px"
            src={poster}
          />
        )}
        <span aria-hidden="true" className="case-video-play">
          <span className="case-video-play-icon" />
        </span>
      </button>
    );
  }

  return (
    <iframe
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      className="case-video-embed"
      loading="lazy"
      src={src}
      title={title}
    />
  );
}
