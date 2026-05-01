"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking() {
  return (
    <Suspense fallback={null}>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams()
  const roomType = searchParams.get("roomType")

  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget;
    const formData = new FormData(form)

    const fullName = formData.get("fullName")
    const contactNumber = formData.get("contactNumber")
    const checkIn = formData.get("checkIn")
    const checkOut = formData.get("checkOut")
    const guests = formData.get("guests")
    const specialRequests = formData.get("specialRequests")
    
    const booking = {
      fullName,
      contactNumber,
      checkIn,
      checkOut,
      roomType,
      guests,
      specialRequests,
    }

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking),
    })

    const data = await response.json();
    setMessage(data.message);

    form.reset();
    setGuests(1);

  }

  return (
    <div className="mx-auto min-h-[844px] w-full max-w-[500px] bg-stone-100">
      <Navbar />

      {/*header */}
      <section className="bg-stone-100 px-5 py-12 text-center">
        <h1 className="font-serif text-2xl leading-snug text-blue-950">
          Booking Inquiry for 
          <br /> 
          <span className="text-3xl">
            {roomType}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-80 text-base italic leading-relaxed text-stone-500">
          Share your stay details below and our team will help confirm the right
          room, dates, and next steps for your visit.
        </p>
      </section>

      {/*form */}
      <section className="bg-stone-100 px-5 pb-12">
        <form 
          onSubmit={handleSubmit}
          className="border border-l-4 border-stone-300 border-l-orange-400 bg-white px-8 py-10 shadow-sm">
          <div className="space-y-8">
            <div>
              <label
                htmlFor="full-name"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Your name"
                className="mt-3 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none placeholder:text-stone-400 focus:border-blue-950"
              />
            </div>

            <div>
              <label
                htmlFor="contact-number"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Contact Number
              </label>
              <input
                id="contact-number"
                name="contactNumber"
                type="tel"
                placeholder="+63 900 000 0000"
                className="mt-3 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none placeholder:text-stone-400 focus:border-blue-950"
              />
            </div>

            <div>
              <label
                htmlFor="check-in"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Check-In Date
              </label>
              <input
                id="check-in"
                name="checkIn"
                type="date"
                className="mt-3 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none focus:border-blue-950"
              />
            </div>

            <div>
              <label
                htmlFor="check-out"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Check-Out Date
              </label>
              <input
                id="check-out"
                name="checkOut"
                type="date"
                className="mt-3 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none focus:border-blue-950"
              />
            </div>

            <div>
              <p className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950">
                Number of Guests
              </p>
              <div className="mt-3 flex h-12 items-center justify-between border-b border-stone-300 text-stone-700">
                <button
                  type="button"
                  aria-label="Decrease number of guests"
                  className="flex h-10 w-10 items-center justify-center text-3xl leading-none hover:text-yellow-900"
                  onClick={() => setGuests((current) => Math.max(1, current - 1))}
                >
                  -
                </button>
                <input
                  aria-label="Number of guests"
                  name="guests"
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(event) =>
                    setGuests(Math.max(1, Number(event.target.value) || 1))
                  }
                  className="h-10 w-16 bg-transparent text-center text-base text-stone-700 outline-none"
                />
                <button
                  type="button"
                  aria-label="Increase number of guests"
                  className="flex h-10 w-10 items-center justify-center text-3xl leading-none hover:text-yellow-900"
                  onClick={() => setGuests((current) => current + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="special-requests"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Special Requests
              </label>
              <textarea
                id="special-requests"
                name="specialRequests"
                rows={4}
                placeholder="Preferred floor, extra bed, arrival time, or other notes"
                className="mt-3 w-full resize-none border-b border-stone-300 bg-transparent text-base leading-relaxed text-stone-700 outline-none placeholder:text-stone-400 focus:border-blue-950"
              />
            </div>
          </div>

          {message && (
            <p className="mt-3 text-center text-sm text-green-700">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="mx-auto mt-5 flex h-14 w-full max-w-80 items-center justify-center gap-5 border-l-4 border-orange-400 bg-blue-950 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#071a33]"
          >
            Submit Inquiry
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-orange-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>

          <p className="mx-auto mt-8 max-w-72 text-center text-xs uppercase leading-relaxed tracking-[0.2em] text-stone-500">
            Our team will respond with availability and next steps within 24
            hours.
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}
