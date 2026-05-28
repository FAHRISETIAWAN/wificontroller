
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:px-8 lg:py-32">
      {/* Left */}
      <div className="flex-1">
        <div
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full
            border border-black/10
            bg-black/[0.03]
            px-4 py-2
            text-sm
            text-gray-600
            backdrop-blur-lg
            dark:border-white/10
            dark:bg-white/5
            dark:text-gray-300
          "
        >
          🚀 HokBen Smart WiFi Controller
        </div>

        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Modern WiFi
          <br />

          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Controller Platform
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
          Tingkatkan pengalaman pelanggan HokBen dengan sistem
          WiFi Controller modern yang dilengkapi captive portal,
          analytics realtime, login OTP, dan monitoring jaringan.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
       <Link
          href="/connect"
          className="
            inline-flex
            items-center
            justify-center

            rounded-2xl

            bg-orange-400

            px-8
            py-4

            text-sm
            font-bold
            text-black

            shadow-2xl
            shadow-orange-500/20

            transition-all
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]

            hover:scale-105
            hover:bg-orange-300

            dark:bg-orange-500
            dark:text-white
          "
        >
          Connect WiFi
        </Link>

          <button
            className="
              rounded-2xl
              border border-black/10
              bg-black/[0.03]
              px-8 py-4
              text-sm font-semibold
              text-black
              backdrop-blur-xl
              transition-all duration-500
              ease-in-out
              hover:bg-black/[0.06]
              hover:scale-105
              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:hover:bg-white/10
            "
          >
            Explore Features
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex flex-1 justify-center">
        <div className="relative overflow-hidden rounded-[40px] border border-black/10 bg-black/[0.03] p-3 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] dark:border-white/10 dark:bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
            alt="WiFi Controller"
            className="h-[650px] w-full rounded-[30px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

