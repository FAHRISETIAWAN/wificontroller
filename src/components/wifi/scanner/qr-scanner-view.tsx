"use client";

import dynamic from "next/dynamic";

const QrScanner = dynamic(
  () =>
    import("@yudiel/react-qr-scanner").then(
      (mod) => mod.Scanner
    ),
  {
    ssr: false,
  }
);

interface Props {
  setResult: (
    value: string
  ) => void;
}

export default function QrScannerView({
  setResult,
}: Props) {
  return (
    <div
    className="
        h-[320px]
        overflow-hidden
        rounded-[28px]

        bg-black
        "
        >
      <QrScanner
        constraints={{
          facingMode: "environment",
        }}
        styles={{
            container: {
            width: "100%",
            height: "320px",
            },
            video: {
            width: "100%",
            height: "320px",
            objectFit: "cover",
            },
        }}
        onScan={(result) => {
          if (
            result?.[0]
              ?.rawValue
          ) {
            setResult(
              result[0]
                .rawValue
            );
          }
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    </div>
  );
}