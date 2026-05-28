"use client";

import { useState } from "react";

import { Icon } from "@iconify/react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  useMediaQuery,
} from "@/hooks/use-media-query";

import ScannerEmpty from "@/components/wifi/scanner/scanner-empty";
import ScannerResult from "@/components/wifi/scanner/scanner-result";
import QrScannerView from "@/components/wifi/scanner/qr-scanner-view";
import DesktopUpload from "@/components/wifi/scanner/desktop-upload";

interface Props {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export default function OCRForm({
  open,
  onOpenChange,
}: Props) {
  // =========================
  // RESPONSIVE
  // =========================
  const isDesktop =
    useMediaQuery(
      "(min-width: 1024px)"
    );

  // =========================
  // STATE
  // =========================
  const [scanMode, setScanMode] =
    useState(false);

  const [result, setResult] =
    useState("");

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side={
          isDesktop
            ? "right"
            : "bottom"
        }
        className={`
          flex
          flex-col

          max-h-[95dvh]

          overflow-hidden

          border-white/10

          bg-[#fffaf5]

          p-0

          dark:bg-[#0b0b0b]

          data-[state=open]:duration-500

          ${
            !isDesktop
              ? `
                rounded-t-[32px]

                border-t
                border-x
                border-b-0
              `
              : `
                border-l
                max-w-xl
              `
          }
        `}
      >
        {/* ========================= */}
        {/* MOBILE HANDLE */}
        {/* ========================= */}
        {!isDesktop && (
          <div className="flex justify-center pt-3">
            <div
              className="
                h-1.5
                w-20
                rounded-full

                bg-orange-200

                dark:bg-white/10
              "
            />
          </div>
        )}

        {/* ========================= */}
        {/* SCROLL AREA */}
        {/* ========================= */}
        <div
          className="
            flex-1

            overflow-y-auto

            overscroll-contain

            p-6
            lg:p-8
          "
        >
          {/* ========================= */}
          {/* HEADER */}
          {/* ========================= */}
          <SheetHeader className="mb-6 text-left">
            <div className="flex items-start">
              {/* ICON */}
            

              {/* TITLE */}
              <div>
                <SheetTitle className="text-3xl font-black">
                  Scan Menu OCR
                </SheetTitle>

                <SheetDescription
                  className="
                    mt-2
                    leading-relaxed

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Scan barcode atau QR menu
                  HokBen untuk mendapatkan
                  bonus akses WiFi dan
                  e-voucher gratis.
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          {/* ========================= */}
          {/* SCANNER AREA */}
          {/* ========================= */}
          <div
            className="
              rounded-[32px]

              border
              border-dashed
              border-orange-200

              bg-orange-50/50

              p-6

              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            {isDesktop ? (
              <div className="space-y-5">
                {/* DESKTOP UPLOAD */}
                <DesktopUpload
                  setResult={setResult}
                />

                {/* RESULT */}
                {result && (
                  <ScannerResult
                    result={result}
                    setScanMode={setScanMode}
                  />
                )}
              </div>
            ) : (
              <>
                {!scanMode ? (
                  <ScannerEmpty
                    setScanMode={setScanMode}
                  />
                ) : (
                  <div className="space-y-5">
                    {/* MOBILE CAMERA */}
                    <QrScannerView
                      setResult={setResult}
                    />

                    {/* RESULT */}
                    {result && (
                      <ScannerResult
                        result={result}
                        setScanMode={setScanMode}
                      />
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* ========================= */}
          {/* NOTE */}
          {/* ========================= */}
          <div
            className="
              mt-6

              flex
              items-start
              gap-3

              rounded-2xl

              border
              border-orange-100

              bg-orange-50/60

              p-4

              text-sm
              leading-relaxed

              text-gray-700

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-gray-300
            "
          >
            <Icon
              icon="solar:info-circle-bold-duotone"
              className="
                mt-0.5
                min-w-[20px]

                text-[20px]
                text-orange-500
              "
            />

            Gunakan fitur OCR dan barcode
            scanner kami untuk memindai
            menu HokBen dan klaim bonus
            akses WiFi serta e-voucher
            eksklusif secara otomatis.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}