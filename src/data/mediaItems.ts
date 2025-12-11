// src/data/mediaItems.ts

export type MediaType = "image" | "video";

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  title: string;
  description: string;
  category?: string;
}

// Generate 25 placeholder items (5x5 grid)
export const mediaItems: MediaItem[] = Array.from({ length: 25 }, (_, i) => ({
  id: `love-boat-${i + 1}`,
  type: "image",
  src: "/boat.png",
  title: `Love Boat View ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Light description placeholder.",
  category: "Exterior",
}));
