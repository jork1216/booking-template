import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LogIn() {
  return (
    <div className="mx-auto flex min-h-[844px] w-full max-w-[500px] flex-col bg-stone-100">
      <Navbar />

      <main className="flex flex-1 items-center bg-stone-100 px-5 py-12">
        <section className="w-full border border-l-4 border-stone-300 border-l-orange-400 bg-white px-8 py-10 shadow-sm">
        
          <h1 className="font-serif text-2xl leading-snug text-blue-950">
            Log In
          </h1>
          <p className="mt-4 text-xs leading-relaxed text-stone-600">
            Sign in to manage your room, dates, and next steps.
          </p>

          <form className="mt-9 space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none placeholder:text-stone-400 focus:border-blue-950"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold uppercase tracking-[0.1em] text-blue-950"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="mt-1 h-12 w-full border-b border-stone-300 bg-transparent text-base text-stone-700 outline-none focus:border-blue-950"
              />
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center border-l-4 border-orange-400 bg-blue-950 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#071a33]"
            >
              Log In
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
