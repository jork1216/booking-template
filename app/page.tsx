import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-[844px] w-full max-w-[390px]">
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-4 font-serif uppercase text-blue-950">
        <span className="tracking-[0.3em]">Elysia Booking</span>
        <button className="tracking-[0.1em] flex items-center justify-center bg-blue-950 px-5 py-2 text-sm text-white">
          RESERVE
        </button>
      </nav>
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
          
          <button className="border-l-4 border-orange-400 h-12 w-60 bg-blue-950 text-sm text-white">
            Book a Room
          </button>
          <button className="h-12 w-60 border border-white bg-white/5 text-sm text-white backdrop-blur">
            Check Availability
          </button>
        </section>
      </div>
    </div>
  );
}
