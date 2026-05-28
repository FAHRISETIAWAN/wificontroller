
import { Icon } from "@iconify/react";

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500 dark:text-orange-400">
          Features
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          Smart WiFi Controller
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Sistem WiFi Controller HokBen dirancang untuk memberikan
          pengalaman koneksi internet yang cepat, aman, stabil,
          dan terintegrasi dengan captive portal modern.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Captive Portal",
            desc: "Landing page interaktif untuk autentikasi pengguna WiFi HokBen.",
            icon: "streamline-plump:web",
          },
          {
            title: "Realtime Analytics",
            desc: "Monitoring pengguna aktif, traffic jaringan, dan performa internet.",
            icon: "solar:chart-square-bold-duotone",
          },
          {
            title: "Voucher & Login",
            desc: "Support login OTP, voucher WiFi, dan social login.",
            icon: "solar:ticket-bold-duotone",
          },
          {
            title: "Secure Network",
            desc: "Keamanan jaringan dengan autentikasi dan filtering modern.",
            icon: "solar:shield-check-bold-duotone",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-orange-100
              bg-orange-50/70
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-2
              hover:border-orange-200
              hover:bg-orange-50
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:hover:bg-white/[0.06]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-orange-200/40
                blur-3xl
                transition-all
                duration-500
                group-hover:scale-125
                dark:bg-orange-500/10
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                border
                border-orange-200
                bg-white/80
                text-orange-500
                shadow-lg
                shadow-orange-100
                transition-all
                duration-500
                group-hover:scale-110
                dark:border-white/10
                dark:bg-orange-500/10
                dark:text-orange-400
                dark:shadow-orange-500/10
              "
            >
              <Icon
                icon={item.icon}
                className="text-[32px]"
              />
            </div>

            {/* Content */}
            <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="relative leading-relaxed text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

