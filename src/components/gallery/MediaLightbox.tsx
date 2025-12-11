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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(4,12,22,0.9)] px-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-full border border-white/40 bg-[rgba(4,12,22,0.85)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-black"
        >
          Close ✕
        </button>

        {/* Image frame */}
        <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#050b14] shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Caption + controls */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#e3e7f0]">
          <div>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="mt-1 max-w-xl text-[11px] text-[#c0cad7]">
              {item.description}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              className="rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#e3e7f0] hover:bg-white/10"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className="rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#e3e7f0] hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
