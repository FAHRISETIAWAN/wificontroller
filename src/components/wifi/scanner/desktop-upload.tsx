"use client";

import { Icon } from "@iconify/react";

interface Props {
  setResult: (
    value: string
  ) => void;
}

export default function DesktopUpload({
  setResult,
}: Props) {
  return (
    <label
      className="
        group

        flex
        cursor-pointer
        flex-col
        items-center
        justify-center


        text-center

        transition-all
        duration-500

        hover:border-orange-300
        hover:bg-orange-50

        dark:border-white/10
        dark:bg-white/[0.03]
        dark:hover:bg-white/[0.05]
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

          transition-all
          duration-500

          group-hover:scale-110
        "
      >
        <Icon
          icon="solar:gallery-add-bold-duotone"
          className="text-[42px]"
        />
      </div>

      <h3 className="text-xl font-bold">
        Upload Barcode / QR
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
        Upload gambar barcode atau QR menu
        HokBen untuk mendapatkan bonus
        akses WiFi otomatis.
      </p>

      {/* Button */}
      <div
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
        "
      >
        <Icon
          icon="solar:upload-bold-duotone"
          className="text-[22px]"
        />

        Upload Gambar
      </div>

      {/* Input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            setResult(file.name);

            console.log(file);
          }
        }}
      />
    </label>
  );
}