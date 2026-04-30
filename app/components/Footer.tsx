export default function Footer() {
  return (
    <section className="bg-blue-950 px-5 py-16 text-center font-serif text-white">
      <h2 className="mb-9 text-lg uppercase leading-relaxed tracking-[0.4em]">
        Elysia
        <br />
        Booking
      </h2>

      <div className="mx-auto grid max-w-72 grid-cols-2 gap-x-8 gap-y-7 text-xs">
        <a href="#" className="text-blue-200">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-200">
          Terms of Service
        </a>
        <a href="#" className="text-blue-200">
          Sustainability
        </a>
        <a href="#" className="text-blue-200">
          Press Room
        </a>
      </div>

      <p className="mt-14 text-[10px] uppercase leading-relaxed tracking-[0.18em] text-blue-200">
        &copy; 2024 Elysia Bookings Hotels & Resorts.
        <br />
        All Rights Reserved.
      </p>
    </section>
  );
}
