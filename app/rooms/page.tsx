import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const rooms = [
  {
    name: "Standard Room",
    image: "/images/standardroom.webp",
    eyebrow: "Essential Comfort",
    tagline: "Quiet comfort for a refined short stay",
    description:
      "A composed retreat with soft linens, warm lighting, and everything needed for an easy overnight escape.",
    rate: "3,200 / night",
    details: [
      "Queen bed with premium linens",
      "Compact writing desk",
      "Rain shower bath amenities",
    ],
  },
  {
    name: "Family Room",
    image: "/images/familyroom.webp",
    eyebrow: "Generous Gathering",
    tagline: "More room for unhurried family time",
    description:
      "A spacious room arranged for shared mornings, restful evenings, and comfortable stays with children or companions.",
    rate: "5,800 / night",
    details: [
      "Two queen beds",
      "Family sitting corner",
      "Extra wardrobe storage",
    ],
  },
  {
    name: "Deluxe Room",
    image: "/images/deluxeroom.webp",
    eyebrow: "Elevated Vistas",
    tagline: "Better view, larger space",
    description:
      "Experience the zenith of comfort in our Deluxe Rooms, featuring generous proportions and windows that frame the horizon.",
    rate: "4,900 / night",
    details: [
      "Panoramic skyline view",
      "Private walk-in wardrobe",
      "Artisanal mini-bar collection",
    ],
  },
];

export default function Rooms() {
  return (
    <div className="mx-auto min-h-[844px] w-full max-w-[500px] bg-stone-100">
      <Navbar />
        {/* hero */}
      <section className="relative h-140 bg-blue-950">
        <Image
          src="/images/roomshero.webp"
          alt="Mountain resort suite at Elysia Reserve"
          fill
          loading="eager"
          className="object-cover brightness-20"
        />
        <div className="absolute inset-0 bg-orange-400/20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="mb-4 text-lg uppercase tracking-[0.3em]">
            Clean
            <br />
            &amp; Comfortable
          </p>
          <h1 className="font-serif text-2xl leading-snug tracking-[0.05em]">
            Rooms for Every Stay
          </h1>
          <p className="mt-5 max-w-72 text-sm leading-relaxed text-stone-100">
            Practical rooms with the essentials you need for an easy, restful
            visit in Lucena City.
          </p>
        </div>
      </section>
    
        {/* rooms.map */}
      <section className="space-y-8 bg-stone-100 px-5 py-12">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="border border-stone-300 bg-white shadow-xl"
          >
            <div className="relative h-80 overflow-hidden bg-stone-300">
              <Image
                src={room.image}
                alt={`${room.name} at Elysia Reserve`}
                fill
                className="object-cover"
              />
            </div>

            <div className="px-6 py-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-900">
                {room.eyebrow}
              </p>
              <h2 className="font-serif text-2xl leading-snug text-blue-950">
                {room.name}
              </h2>
              <p className="mt-2 text-sm italic leading-relaxed text-stone-500">
                {room.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                {room.description}
              </p>

              <ul className="mt-5 space-y-3">
                {room.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-snug text-stone-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-yellow-900"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3 2.4 5.8 6.2.5-4.7 4 1.4 6.1-5.3-3.2-5.3 3.2 1.4-6.1-4.7-4 6.2-.5L12 3Z" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4">
                <p className="font-serif text-2xl leading-none text-blue-950">
                  <span className="inline-flex items-baseline gap-0.5">
                    <span className="text-xl leading-none">&#8369;</span>
                    <span>{room.rate}</span>
                  </span>
                </p>
                <Link
                  href={`/booking?roomType=${encodeURIComponent(room.name)}`}
                  className="flex h-12 w-full items-center justify-center border-l-4 border-orange-400 bg-blue-950 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#071a33]"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}
