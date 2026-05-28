
export default function CTA() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border border-black/10
          bg-[#1f1f1f]
          p-10
          md:p-16
          dark:border-white/10
        "
      >
        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
              Ready to Transform Your
              <br />

              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                WiFi Controller?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Tingkatkan pengalaman koneksi pelanggan HokBen
              dengan sistem WiFi Controller modern, captive portal,
              analytics realtime, dan autentikasi aman.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8 py-4
                  font-semibold
                  text-black
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:scale-105
                "
              >
                Schedule Demo

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-8 py-4
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:bg-white/10
                  hover:scale-105
                "
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
              alt="WiFi Controller"
              className="
                relative
                z-20
                h-[500px]
                w-auto
                rounded-[40px]
                object-cover
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}