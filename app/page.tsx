import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="mx-auto min-h-[844px] w-full max-w-[500px]">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <div className="relative h-140 bg-green-700">
        <Image
          src="/images/hotel1.webp"
          alt="Hotel Image"
          fill
          loading="eager"
          className="object-cover brightness-30"
        />
        
        {/*transparent overlay*/} 
        <div className="absolute inset-0 bg-blue-950/60"></div>

        <section className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
          <span className="block text-lg text-center uppercase tracking-[0.3em] text-white">
            A Sanctuary of <br />Stillness
          </span>

          <span className="block font-serif text-white tracking-[0.05em]">
            Experience Ethereal Grandeur
          </span>
          
          <Link
            href="/rooms"
            className="flex h-12 w-60 items-center justify-center border-l-4 border-orange-400 bg-blue-950 text-sm text-white hover:bg-[#071a33]"
          >
            Book a Room
          </Link>
          <button className="h-12 w-60 border border-white bg-white/5 text-sm text-white backdrop-blur">
            Check Availability
          </button>
        </section>
      </div>

      {/* location */}
      <section className="bg-stone-200 px-5 py-6">
        <p className="mt-12 mb-5 text-sm uppercase text-yellow-900">THE LOCATION</p>
        <h2 className="mb-5 font-serif text-1xl text-blue-950">
          Prestigious Serenity
        </h2>
        <p className="mb-10 text-sm text-stone-600">
          Nestled amidst the emerald peaks of the High Sierras, Elysia Reserve
          offers a secluded escape where the mountains meet the clouds. Our
          estate spans 400 acres of private alpine forest, providing an
          unparalleled sense of exclusivity and breath-taking natural beauty.
        </p>
        {/* address */}
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-300 border border-stone-400 text-3xl text-blue-950">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-blue-950">ADDRESS</p>
              <p className="text-sm leading-snug text-stone-800">
                1200 Ethereal Way, Saint-Moritz, Switzerland
              </p>
            </div>
          </div>

          <div className="mb-7 flex items-center gap-5">
            <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-2xl border bg-stone-300 border-stone-400 text-3xl text-blue-950">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v5l3 2" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-blue-950">PROXIMITY</p>
              <p className="text-sm leading-snug text-stone-800">
                15 Minutes from Private Jet Terminal
              </p>
            </div>
          </div>

          <div className="mt-5 mb-15 overflow-hidden rounded-lg border border-stone-300 shadow-2xl">
            <iframe
              title="Map showing Elysia Reserve location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.298871703072!2d121.62170767425457!3d13.940801792891351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4caa7eb2b77d%3A0xe594a2eea8cfc2c2!2sSM%20City%20Lucena!5e0!3m2!1sen!2sph!4v1777384572226!5m2!1sen!2sph"
              className="h-56 w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* direct assistance */}
      <section className="bg-stone-300 px-5 py-12">
        <div className="mb-16 text-center">
          <h2 className="mt-10 mb-5 font-serif text-lg text-blue-950">
            Direct Assistance
          </h2>
          <p className="mx-auto max-w-72 text-base text-stone-700">
            Our concierge is available 24/7 to curate your perfect stay before
            you even arrive.
          </p>
        </div>

        <div className="space-y-8">
          <button className="flex min-h-30 w-full items-center gap-7 border-l-4 border-orange-300 bg-white px-9 text-left text-blue-950">
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
            </svg>
            <span>
              <span className="block font-serif leading-snug">
                Contact Us on
                <br />
                Messenger
              </span>
              <span className="mt-1 block text-xs leading-tight text-stone-500">
                Instant response from
                <br />
                our team
              </span>
            </span>
          </button>

          <button className="mb-10 flex min-h-25 w-full items-center gap-7 border-l-4 border-blue-950 bg-white px-9 text-left text-blue-950">
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span>
              <span className="block font-serif leading-snug">
                Call Now
              </span>
              <span className="mt-1 block text-xs text-stone-500">
                +63 930 5567 027
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* sample */}
      <section className="bg-stone-100 px-5 py-12">
        <div className="mt-10 space-y-6">
          <div className="relative h-80 overflow-hidden bg-stone-300 shadow-sm">
            <Image
              src="/images/hotel1.webp"
              alt="The Royal Suite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <h2 className="absolute bottom-8 left-8 font-serif text-lg text-white">
              The Royal Suite
            </h2>
          </div>

          <div className="relative h-80 overflow-hidden bg-stone-300 shadow-sm">
            <Image
              src="/images/hotel1.webp"
              alt="The Alpine Suite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <h2 className="absolute bottom-8 left-8 font-serif text-lg text-white">
              The Alpine Suite
            </h2>
          </div>

          <div className="relative h-80 overflow-hidden bg-stone-300 shadow-sm">
            <Image
              src="/images/hotel1.webp"
              alt="The Serenity Suite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <h2 className="absolute bottom-8 left-8 font-serif text-lg text-white">
              The Serenity Suite
            </h2>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}
