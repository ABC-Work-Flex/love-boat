// src/components/gallery/MediaLightbox.tsx

"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { MediaItem } from "../../data/mediaItems";

type Props = {
  item: MediaItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function MediaLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: Props) {
  if (!item) return null;

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-4"
      onClick={handleBackdropClick}
    >
      {/* Content wrapper */}
      <div className="relative w-full max-w-5xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 hover:bg-black"
        >
          Close ✕
        </button>

        {/* Image container */}
        <div className="relative overflow-hidden rounded-3xl bg-black/80 shadow-2xl">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-200">
          <div>
            <p className="font-medium text-sm text-white">{item.title}</p>
            <p className="mt-1 max-w-xl text-[11px] text-slate-300">
              {item.description}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              className="rounded-full border border-white/40 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-100 hover:bg-white/10"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className="rounded-full border border-white/40 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-100 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
