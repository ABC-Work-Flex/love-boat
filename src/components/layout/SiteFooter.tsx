export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-slate-200/80 bg-[#f0ece3]"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500">
              Contact
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in
              touch for viewings, commissions, or questions about Love Boat.
            </p>
          </div>
          <div className="space-y-1 text-sm text-slate-800">
            <p className="font-medium">Stephen Clark</p>
            <p>
              Email:{" "}
              <a
                href="mailto:example@example.com"
                className="underline underline-offset-2 hover:text-slate-950"
              >
                example@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+15555555555"
                className="underline underline-offset-2 hover:text-slate-950"
              >
                +1 (555) 555-5555
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Love Boat.</span>
          <span>Built with care on the water.</span>
        </div>
      </div>
    </footer>
  );
}
