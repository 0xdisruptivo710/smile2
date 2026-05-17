"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

export function VideoPlayer({ src, poster, label, className = "" }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden border border-line bg-ink ${className}`}
    >
      {playing ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproduzir vídeo: ${label}`}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover transition-transform duration-[900ms] ease-out-quint group-hover:scale-105"
          />
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,28,24,0.05) 40%, rgba(31,28,24,0.78) 100%)",
            }}
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-paper text-ink transition-[transform,background-color] duration-300 ease-out-quint group-hover:scale-110 group-hover:bg-gold"
          >
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5">
            <span aria-hidden className="h-2 w-2 shrink-0 bg-gold" />
            <span className="text-sm font-medium text-paper">{label}</span>
          </span>
        </button>
      )}
    </div>
  );
}
