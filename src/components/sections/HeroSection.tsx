// src/components/sections/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen overflow-hidden bg-[#0f3c5d]">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/boat.png"
          alt="Love Boat on the water"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(12,23,38,0.4)_0,_rgba(7,17,28,0.96)_60%,_rgba(7,17,28,1)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:items-center lg:px-0 lg:pb-28 lg:pt-32">
        {/* Text column */}
        <div className="max-w-xl space-y-7">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#f6f2eb]/70">
              A houseboat with history
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#fdfcf8] sm:text-5xl lg:text-6xl">
              Love Boat
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-[#f6f2eb]/85 sm:text-base">
            A handcrafted refuge on the water — warm, quiet, and built with
            love. Built over 30 years ago and lovingly maintained ever since,
            Love Boat is a cozy floating home designed for anyone seeking a
            true escape: a place to unwind, reset, and drift into a slower way
            of living. More than a boat, it’s a wooden sanctuary where comfort,
            craft, and calm meet.
          </p>

          {/* Small spec row */}
          <div className="flex flex-wrap gap-3 text-[11px] text-[#f6f2eb]/85">
            <span className="rounded-full border border-[#f6f2eb]/20 bg-white/5 px-3 py-1">
              Hand-built by Stephen Clark &amp; mates
            </span>
            <span className="rounded-full border border-[#f6f2eb]/20 bg-white/5 px-3 py-1">
              Built over 30 years ago
            </span>
            <span className="rounded-full border border-[#f6f2eb]/20 bg-white/5 px-3 py-1">
              Floating cabin sanctuary
            </span>
          </div>

          {/* Actions */}
          <div className="mt-1 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-[#c28a5b] px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#b47947]"
            >
              View gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[#f6f2eb] underline underline-offset-4"
            >
              Arrange a viewing
            </a>
          </div>
        </div>

        {/* Minimal image card / badge on the right */}
        <div className="flex-1">
          <div className="ml-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/50">
              <Image
                src="/boat.png"
                alt="Love Boat profile view"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#f6f2eb]/80">
              <span>Love Boat · Houseboat</span>
              <span className="uppercase tracking-[0.18em]">
                Slip · Bay Area
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
