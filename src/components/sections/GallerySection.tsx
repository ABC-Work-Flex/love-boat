// src/components/sections/GallerySection.tsx

"use client";

import { useState } from "react";
import { mediaItems, type MediaItem } from "../../data/mediaItems";
import MediaCard from "../gallery/MediaCard";
import MediaLightbox from "../gallery/MediaLightbox";

export default function GallerySection() {
  const [selected, setSelected] = useState<MediaItem | null>(mediaItems[0]);
  const [isOpen, setIsOpen] = useState(false);

  const openItem = (item: MediaItem) => {
    setSelected(item);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const goToNext = () => {
    if (!selected) return;
    const index = mediaItems.findIndex(
      (m: MediaItem) => m.id === selected.id
    );
    const next = mediaItems[(index + 1) % mediaItems.length];
    setSelected(next);
  };

  const goToPrev = () => {
    if (!selected) return;
    const index = mediaItems.findIndex(
      (m: MediaItem) => m.id === selected.id
    );
    const prev =
      index === 0 ? mediaItems[mediaItems.length - 1] : mediaItems[index - 1];
    setSelected(prev);
  };

  return (
    <section
      id="gallery"
      className="border-t border-slate-200/80 bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">
          Gallery
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          A simple view of Love Boat from different angles and moments.
        </p>

        {/* 5-column grid on md+ screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {mediaItems.map((item: MediaItem) => (
            <div key={item.id} onClick={() => openItem(item)}>
              <MediaCard item={item} onClick={() => openItem(item)} />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <MediaLightbox
          item={selected}
          onClose={handleClose}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </section>
  );
}
