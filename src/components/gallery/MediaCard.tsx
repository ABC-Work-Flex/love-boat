// src/components/gallery/MediaCard.tsx

import Image from "next/image";
import type { MediaItem } from "../../data/mediaItems";

type Props = {
  item: MediaItem;
  onClick: () => void;
};

export default function MediaCard({ item, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition"
    >
      {/* This wrapper forces actual height for the card */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </button>
  );
}
