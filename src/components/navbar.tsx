"use client";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import Logo from "@/app/icon.png";

import { useTheme } from "@/components/providers/theme-provider";

export default function Navbar() {
  const { darkMode, toggleTheme } =
    useTheme();

  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-black/10

        bg-white/70

        backdrop-blur-xl

        transition-colors
        duration-500

        dark:border-white/10
        dark:bg-black/70
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between

          px-6
          py-4

          lg:px-8
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                overflow-hidden
                rounded-full

                bg-orange-50

                ring-1
                ring-orange-100

                shadow-lg
                shadow-orange-500/10

                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:scale-110

                dark:bg-white/5
                dark:ring-white/10
              "
            >
              <Image
                src={Logo}
                alt="HokBen WiFi"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <div>
              <h1
                className="
                  text-lg
                  font-bold
                  tracking-wide
                "
              >
                HokBen WiFi
              </h1>

              <p
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Smart WiFi Controller
              </p>
            </div>
          </Link>
        </div>

        {/* MENU */}
        <nav
          className="
            hidden
            items-center
            gap-8

            text-sm

            md:flex
          "
        >
          {[
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-gray-600

                transition-all
                duration-300
                ease-out

                hover:text-black

                dark:text-gray-400
                dark:hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-2xl

              border
              border-orange-100

              bg-orange-50/50

              transition-all
              duration-500

              hover:scale-105
              hover:bg-orange-100/70

              dark:border-white/10
              dark:bg-white/5
              dark:hover:bg-white/10
            "
          >
            {darkMode ? (
              <Sun
                size={18}
                className="text-orange-500"
              />
            ) : (
              <Moon
                size={18}
                className="
                  text-slate-700
                  dark:text-white
                "
              />
            )}
          </button>

          {/* CTA */}
          <Link
            href="/connect"
            className="
              rounded-2xl

              bg-orange-400

              px-5
              py-2

              text-sm
              font-semibold
              text-black

              shadow-lg
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
        </div>
      </div>
    </header>
  );
}