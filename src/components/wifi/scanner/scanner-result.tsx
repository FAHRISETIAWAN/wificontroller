"use client";

interface Props {
  result: string;
  setScanMode: (
    value: boolean
  ) => void;
}

export default function ScannerResult({
  result,
  setScanMode,
}: Props) {
  return (
    <div className="space-y-5">
      {/* Result */}
      <div
        className="
          rounded-2xl

          border
          border-orange-100

          bg-orange-50

          p-4

          dark:border-white/10
          dark:bg-white/[0.04]
        "
      >
        <p className="text-sm font-medium text-orange-500">
          Barcode Terdeteksi
        </p>

        <p
          className="
            mt-2
            break-all

            text-sm

            text-gray-700
            dark:text-gray-300
          "
        >
          {result}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={() =>
          setScanMode(false)
        }
        className="
          w-full

          rounded-2xl

          border
          border-orange-100

          bg-white

          px-5
          py-3

          font-medium

          transition-all
          duration-300

          hover:bg-orange-50

          dark:border-white/10
          dark:bg-white/[0.04]
        "
      >
        Tutup Scanner
      </button>
    </div>
  );
}