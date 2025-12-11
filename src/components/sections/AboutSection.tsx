import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-slate-200/80 bg-[#f4f1ea] py-14 sm:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-0">
        <div className="flex-1">
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
            About
          </h2>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            A hand-built wooden home on the water.
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              euismod, neque quis tincidunt volutpat, eros risus suscipit sem,
              vel porta dui velit at turpis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dignissim urna eget augue posuere, in laoreet lacus consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              mauris lectus. Sed in diam quis massa ultricies posuere ut a
              lorem.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/5 shadow-md">
            <div className="relative aspect-[4/3]">
              <Image
                src="/boat.png"
                alt="Love Boat exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
