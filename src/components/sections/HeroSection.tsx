// src/components/sections/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#efe7d7]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-0 lg:pb-24 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-center">

          {/* Text column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                Wooden Houseboat
              </p>

              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Love Boat
              </h1>
            </div>

            {/* Updated final copy with 30 years line */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              A handcrafted refuge on the water — warm, quiet, and built with love. 
              Built over 30 years ago and lovingly maintained ever since, Love Boat is a cozy 
              floating home designed for anyone seeking a true escape: a place to unwind, reset, 
              and drift into a slower way of living. More than a boat, it’s a wooden sanctuary 
              where comfort, craft, and calm meet.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-700">
              <div className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1">
                Hand-built by Stephen Clark &amp; mates
              </div>
              <div className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1">
                Built over 30 years ago
              </div>
              <div className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1">
                Floating cabin sanctuary
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-[#f4f1ea] shadow-sm hover:bg-slate-800"
              >
                View Gallery
              </a>

              <a
                href="/about"
                className="text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-900/5 shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src="/boat.png"
                  alt="Love Boat 3D render"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Placeholder render. Final photography coming soon.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
