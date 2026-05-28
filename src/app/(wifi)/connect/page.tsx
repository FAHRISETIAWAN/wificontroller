"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  ArrowLeft,
  Moon,
  Sun,
} from "lucide-react";

import WifiSelector from "@/components/wifi/wifi-selector";

import MemberForm from "@/components/wifi/member-form";
import GuestForm from "@/components/wifi/guest-form";
import OCRForm from "@/components/wifi/ocr-form";

import Logo from "@/app/icon.png";

import { useTheme } from "@/components/providers/theme-provider";

export default function ConnectPage() {
  // =========================
  // STATE
  // =========================
  const [selected, setSelected] =
    useState<string | null>(null);

  // =========================
  // THEME
  // =========================
  const { darkMode, toggleTheme } =
    useTheme();

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-white
        text-black

        transition-colors
        duration-500

        dark:bg-black
        dark:text-white
      "
    >
      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glow Left */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[450px]
            w-[450px]
            rounded-full

            bg-orange-300/20
            blur-3xl

            dark:bg-orange-500/10
          "
        />

        {/* Glow Right */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-[450px]
            w-[450px]
            rounded-full

            bg-yellow-200/20
            blur-3xl

            dark:bg-yellow-400/10
          "
        />
      </div>

      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}
      <div className="border-b border-black/10 dark:border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-6
            py-5
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* BACK */}
            <Link
              href="/"
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
              <ArrowLeft
                size={18}
                className="
                  text-slate-700
                  dark:text-white
                "
              />
            </Link>

            {/* LOGO */}
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

                  dark:bg-white/5
                  dark:ring-white/10
                "
              >
                <Image
                  src={Logo}
                  alt="HokBen"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  HokBen WiFi
                </h2>

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

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* THEME TOGGLE */}
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
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* HEADER */}
        <div className="mb-14 text-center">
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full

              border
              border-orange-100

              bg-orange-50/80

              px-5
              py-2

              text-sm
              font-medium
              text-orange-500

              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-orange-400
            "
          >
            📶 HokBen WiFi Controller
          </div>

          {/* Title */}
          <h1
            className="
              text-5xl
              font-black
              leading-tight

              md:text-6xl
            "
          >
            Connect to

            <span
              className="
                bg-gradient-to-r
                from-orange-400
                to-yellow-300
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              HokBen WiFi
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-lg
              leading-relaxed

              text-gray-600
              dark:text-gray-400
            "
          >
            Pilih metode akses WiFi yang sesuai
            untuk menikmati koneksi internet
            cepat, aman, dan stabil di seluruh
            outlet HokBen.
          </p>
        </div>

        {/* ========================= */}
        {/* SELECTOR */}
        {/* ========================= */}
        <WifiSelector
          selected={selected || ""}
          setSelected={setSelected}
        />

        {/* ========================= */}
        {/* FORMS */}
        {/* ========================= */}

        <MemberForm
          open={selected === "member"}
          onOpenChange={(open) => {
            if (!open) {
              setSelected(null);
            }
          }}
        />

        <GuestForm
          open={selected === "guest"}
          onOpenChange={(open) => {
            if (!open) {
              setSelected(null);
            }
          }}
        />

        <OCRForm
          open={selected === "ocr"}
          onOpenChange={(open) => {
            if (!open) {
              setSelected(null);
            }
          }}
        />

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}
        <div
          className="
            mt-16
            text-center
            text-sm
            text-gray-500

            dark:text-gray-400
          "
        >
          Dengan menggunakan layanan WiFi
          HokBen, Anda menyetujui kebijakan
          penggunaan jaringan dan privasi
          layanan kami.
        </div>
      </div>
    </main>
  );
}