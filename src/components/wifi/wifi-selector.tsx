import { Icon } from "@iconify/react";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

export default function WifiSelector({
  selected,
  setSelected,
}: Props) {
  const items = [
    {
      id: "member",
      title: "Akses Member",
      desc: "Login member HokBen untuk akses WiFi premium 60 menit.",
      icon: "solar:user-bold-duotone",
    },
    {
      id: "guest",
      title: "Akses Tamu",
      desc: "Nikmati koneksi cepat gratis selama 15 menit.",
      icon: "fluent:person-guest-16-filled",
    },
    {
      id: "ocr",
      title: "Scan Menu OCR",
      desc: "Scan menu HokBen dan dapatkan tambahan akses WiFi.",
      icon: "solar:camera-bold-duotone",
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => {
        const active = selected === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              p-8
              text-left

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:-translate-y-2
              hover:shadow-xl

              ${
                active
                  ? `
                    border-orange-200
                    bg-gradient-to-br
                    from-orange-50
                    to-yellow-50

                    shadow-xl
                    shadow-orange-500/10

                    dark:border-orange-500/20
                    dark:from-orange-500/10
                    dark:to-yellow-500/5
                  `
                  : `
                    border-black/10
                    bg-white/70

                    hover:border-orange-200
                    hover:bg-orange-50/70

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:hover:bg-white/[0.06]
                  `
              }
            `}
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
              className={`
                relative
                mb-6

                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-3xl

                transition-all
                duration-500

                group-hover:scale-110

                ${
                  active
                    ? `
                      bg-gradient-to-br
                      from-orange-400
                      to-yellow-300

                      text-black

                      shadow-lg
                      shadow-orange-500/20
                    `
                    : `
                      border
                      border-orange-100

                      bg-white/80

                      text-orange-500

                      shadow-orange-100

                      dark:border-white/10
                      dark:bg-white/[0.05]
                      dark:text-orange-400
                    `
                }
              `}
            >
              <Icon
                icon={item.icon}
                className="text-[34px]"
              />
            </div>

            {/* Title */}
            <h3
              className="
                relative
                text-2xl
                font-black
              "
            >
              {item.title}
            </h3>

            {/* Desc */}
            <p
              className="
                relative
                mt-4
                leading-relaxed

                text-gray-600
                dark:text-gray-400
              "
            >
              {item.desc}
            </p>

            {/* Active Badge */}
            {active && (
              <div
                className="
                  absolute
                  right-6
                  top-6

                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-br
                  from-orange-400
                  to-yellow-300

                  text-sm
                  font-bold
                  text-black

                  shadow-md
                  shadow-orange-500/20
                "
              >
                ✓
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}