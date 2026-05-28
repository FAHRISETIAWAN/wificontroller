"use client";

import { Icon } from "@iconify/react";

interface Props {
  setScanMode: (
    value: boolean
  ) => void;
}

export default function ScannerEmpty({
  setScanMode,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center

        py-10
        text-center
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-3xl

          bg-gradient-to-br
          from-orange-400
          to-yellow-300

          text-black

          shadow-lg
          shadow-orange-500/20
        "
      >
        <Icon
          icon="solar:qr-code-bold-duotone"
          className="text-[42px]"
        />
      </div>

      <h3 className="text-xl font-bold">
        Scan Barcode / QR
      </h3>

      <p
        className="
          mt-3
          max-w-md
          leading-relaxed

          text-gray-600
          dark:text-gray-400
        "
      >
        Scan barcode menu atau QR voucher
        HokBen untuk mendapatkan bonus
        akses WiFi otomatis.
      </p>

      <button
        onClick={() =>
          setScanMode(true)
        }
        className="
          mt-6

          inline-flex
          items-center
          justify-center
          gap-2

          rounded-2xl

          bg-gradient-to-r
          from-orange-400
          to-yellow-300

          px-6
          py-3

          font-semibold
          text-black

          shadow-lg
          shadow-orange-500/20

          transition-all
          duration-500

          hover:scale-105
        "
      >
        <Icon
          icon="solar:camera-bold-duotone"
          className="text-[22px]"
        />

        Buka Kamera
      </button>
    </div>
  );
}