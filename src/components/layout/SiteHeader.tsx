export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#f4f1ea]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500">
            Love Boat
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">
            Wooden Houseboat
          </span>
        </div>
        <nav className="flex gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#gallery" className="hover:text-slate-900">
            Gallery
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
