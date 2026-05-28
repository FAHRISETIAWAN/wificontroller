import Aside from '@/components/aside'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-dm-sans',
})
const playfair_display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: {
    template: "%s | HokBen WiFi Controller",
    default: "HokBen WiFi Controller",
  },
  description:
    "HokBen WiFi Controller adalah platform captive portal dan manajemen jaringan modern untuk menghadirkan pengalaman koneksi WiFi yang cepat, aman, stabil, dan terintegrasi di seluruh outlet HokBen.",

  keywords: [
    "HokBen",
    "WiFi Controller",
    "Captive Portal",
    "WiFi Management",
    "Network Monitoring",
    "WiFi Analytics",
    "Hotspot Login",
    "Voucher WiFi",
    "OTP Login",
    "Guest WiFi",
    "Realtime Analytics",
    "Landing Page WiFi",
    "Network Security",
    "WiFi Authentication",
    "Modern WiFi Platform",
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(clsx(
              'text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950',
              dm_sans.variable,
              playfair_display.variable
            ), "font-sans", jetbrainsMono.variable)}
    >
      <body>
        <Aside.Provider>{children}</Aside.Provider>
      </body>
    </html>
  )
}
