"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-4 font-serif uppercase text-blue-950">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleMenu}
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
        <Link
          href="/rooms"
          className="tracking-[0.1em] flex items-center justify-center bg-blue-950 px-5 py-2 text-sm text-white hover:bg-[#071a33]">
          RESERVE
        </Link>
      </nav>

      <div
        className={`fixed left-0 top-0 z-[60] h-screen w-full bg-white px-5 py-5 text-blue-950 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-start justify-between border-b border-orange-300 pb-3">
          <span className="font-serif text uppercase tracking-[0.3em]">
            Elysia Booking
          </span>
          <button
            type="button"
            onClick={handleMenu}
            aria-label="Close navigation menu"
            className="flex h-6 w-6 items-center justify-center"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="space-y-0">
          <Link
            href="/#location"
            onClick={handleMenu}
            className="flex items-center gap-5 border-b border-stone-200 py-4 text-yellow-900"
          >
            <svg
              className="h-5 w-5 shrink-0 text-orange-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="font-serif text-lg italic">Location</span>
          </Link>

          <Link
            href="/rooms"
            className="flex items-center gap-5 border-b border-stone-200 py-4"
          >
            <svg
              className="h-5 w-5 shrink-0 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11h16v7" />
              <path d="M4 18V8" />
              <path d="M4 13h16" />
              <path d="M8 11V9h5a3 3 0 0 1 3 3" />
            </svg>
            <span className="text-lg">Rooms</span>
          </Link>

          <Link
            href="/#direct-assistance"
            onClick={handleMenu}
            className="flex items-center gap-5 border-b border-stone-200 py-4"
          >
            <svg
              className="h-5 w-5 shrink-0 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
            </svg>
            <span className="text-lg">Direct Assistance</span>
          </Link>

          <Link
            href="/#check-availability"
            onClick={handleMenu}
            className="flex items-center gap-5 border-b border-stone-200 py-4"
          >
            <svg
              className="h-5 w-5 shrink-0 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="m9 16 2 2 4-5" />
            </svg>
            <span className="text-lg">Availability</span>
          </Link>

          <Link
            href="/login"
            onClick={handleMenu}
            className="flex items-center gap-5 border-b border-stone-200 py-4"
          >
            <svg
              className="h-5 w-5 shrink-0 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
            </svg>
            <span className="text-lg">Log In</span>
          </Link>
        </div>

        <div className="mt-14 space-y-7 text-sm normal-case text-blue-950">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-900">
              Reservations
            </p>
            <p className="text-stone-500">+63 930 5567 027</p>
            <p className="text-stone-500">Message us for room questions</p>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-900">
              Follow Us
            </p>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
