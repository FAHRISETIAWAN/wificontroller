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

export default function MemberForm({
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
            <div className="mb-5 flex items-start">
            

              <div>
                <SheetTitle className="text-3xl font-black">
                  Login Member
                </SheetTitle>

                <SheetDescription
                  className="
                    mt-2
                    leading-relaxed
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Gunakan akun member HokBen
                  untuk mendapatkan akses WiFi
                  premium selama 60 menit.
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          {/* Form */}
          <div className="space-y-5">
            {/* Username */}
            <div>
              <label
                className="
                  mb-2
                  flex
                  items-center
                  gap-2

                  text-sm
                  font-medium
                "
              >
                <Icon
                  icon="solar:user-outline"
                  className="text-lg text-orange-500"
                />

                Username
              </label>

              <input
                type="text"
                placeholder="Masukkan username"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-orange-100

                  bg-orange-50/50

                  px-5
                  py-4

                  outline-none

                  transition-all
                  duration-300

                  focus:border-orange-300
                  focus:ring-4
                  focus:ring-orange-100

                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="
                  mb-2
                  flex
                  items-center
                  gap-2

                  text-sm
                  font-medium
                "
              >
                <Icon
                  icon="solar:lock-password-outline"
                  className="text-lg text-orange-500"
                />

                Kata Sandi
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-orange-100

                  bg-orange-50/50

                  px-5
                  py-4

                  outline-none

                  transition-all
                  duration-300

                  focus:border-orange-300
                  focus:ring-4
                  focus:ring-orange-100

                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              />
            </div>

            {/* Button */}
            <button
              className="
                mt-3

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

              Connect 60 Menit
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}