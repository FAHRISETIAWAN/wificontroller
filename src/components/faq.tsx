
export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            ✦ Frequently asked questions
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Frequently asked
            <br />

            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Informasi seputar implementasi WiFi Controller HokBen,
            captive portal, autentikasi pengguna, dan monitoring jaringan.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              q: "Apa fungsi captive portal pada WiFi HokBen?",
              a: "Captive portal digunakan sebagai halaman landing sebelum pengguna mendapatkan akses internet. Halaman ini dapat digunakan untuk branding, promosi, login pengguna, dan informasi layanan.",
            },
            {
              q: "Apakah sistem mendukung login OTP dan voucher?",
              a: "Ya. Sistem mendukung autentikasi menggunakan OTP, voucher WiFi, hingga integrasi login menggunakan social media.",
            },
            {
              q: "Apakah WiFi Controller dapat memonitor pengguna aktif?",
              a: "Tentu. Dashboard analytics menyediakan informasi realtime seperti jumlah pengguna aktif, bandwidth usage, hingga performa jaringan tiap outlet.",
            },
            {
              q: "Apakah sistem aman digunakan di banyak outlet?",
              a: "Ya. Sistem dirancang dengan keamanan modern, filtering jaringan, dan monitoring terpusat untuk memastikan koneksi tetap aman dan stabil.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="
                group
                rounded-[32px]
                border border-black/10
                bg-black/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-orange-400/30
                hover:bg-black/[0.05]
                dark:border-white/10
                dark:bg-white/5
                dark:hover:bg-white/10
              "
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <h3 className="text-left text-xl font-bold">
                  {item.q}
                </h3>

                <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-2xl bg-orange-400 text-lg font-bold text-black shadow-lg shadow-orange-500/20 transition-all duration-500 ease-in-out group-open:rotate-180 group-hover:scale-110 dark:bg-orange-500 dark:text-white">
                  ↓
                </div>
              </summary>

              <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

