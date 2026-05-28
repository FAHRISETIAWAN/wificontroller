"use client";

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

interface Props {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export default function GuestForm({
  open,
  onOpenChange,
}: Props) {
  const isDesktop =
    useMediaQuery(
      "(min-width: 1024px)"
    );

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
          overflow-y-auto

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
              `
          }
        `}
      >
        <div className="p-6">
          {/* Header */}
          <SheetHeader className="mb-8 text-left">
            <div className="mb-5 flex items-start ">
              {/* Icon */}
            

              <div>
                <SheetTitle className="text-3xl font-black">
                  Akses Tamu
                </SheetTitle>

                <SheetDescription
                  className="
                    mt-2
                    leading-relaxed
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Nikmati koneksi internet cepat
                  gratis selama 15 menit tanpa
                  login member.
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          {/* Card */}
          <div
            className="
              rounded-[32px]

              border
              border-orange-100

              bg-orange-50/60

              p-6

              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-start
                  justify-start

                  rounded-2xl


                "
              >
                <Icon
                  icon="solar:clock-circle-bold-duotone"
                  className="
                    text-[26px]
                    text-orange-500
                  "
                />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Free Guest Access
                </h3>

                <p
                  className="
                    mt-2
                    leading-relaxed

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Anda akan mendapatkan akses
                  internet gratis selama 15 menit
                  untuk browsing dan social media.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            className="
              mt-6

              flex
              w-full
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-gradient-to-r
              from-orange-400
              to-yellow-300

              px-6
              py-4

              font-semibold
              text-black

              shadow-lg
              shadow-orange-500/20

              transition-all
              duration-500

              hover:scale-[1.02]
            "
          >
            <Icon
              icon="solar:wifi-router-bold-duotone"
              className="text-[22px]"
            />

            Connect 15 Menit
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}