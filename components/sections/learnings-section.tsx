"use client";

import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  thumbnail_url: string;
  views_count: number;
  likes_count: number;
  comment_count: number;
  url: string;
};

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] snap-start rounded-xl border border-border/80 bg-card/60 p-3 animate-pulse">
      <div className="aspect-video w-full rounded-lg bg-muted/20 mb-3" />
      <div className="h-4 bg-muted/20 rounded w-3/4 mb-2" />
      <div className="h-3 bg-muted/20 rounded w-1/2" />
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-[280px] md:w-[320px] snap-start rounded-xl border border-border/80 bg-card/60 p-3 transition-colors hover:border-primary/40"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted/20 mb-3">
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground/40 text-xs">
            thumbnail
          </div>
        ) : (
          <img
            src={video.thumbnail_url}
            alt={video.title}
            className="size-full object-cover"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h3 className="text-sm font-medium leading-snug text-foreground/90 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
        {video.title}
      </h3>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{formatCount(video.views_count)} views</span>
        <span>·</span>
        <span>{formatCount(video.likes_count)} likes</span>
        <span>·</span>
        <span>{formatCount(video.comment_count)} comments</span>
      </div>
    </a>
  );
}

export function LearningsSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tv.shernanjavier.com/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data.videos ?? []))
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && videos.length === 0) return null;

  return (
    <section className="w-full px-4 md:px-6 pb-20">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            learning
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            things i learned and made vids about
          </h2>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`
            .snap-x::-webkit-scrollbar { display: none; }
          `}</style>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
        </div>
      </div>
    </section>
  );
}
