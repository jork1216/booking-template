import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-4 font-serif uppercase text-blue-950">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-9 w-9 items-center justify-center text-blue-950"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
        <Link href="/" className="tracking-[0.3em]">
          Elysia Booking
        </Link>

      </div>
      <button className="tracking-[0.1em] flex items-center justify-center bg-blue-950 px-5 py-2 text-sm text-white hover:bg-[#071a33]">
        RESERVE
      </button>
    </nav>
  );
}
