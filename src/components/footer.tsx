
export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-xl font-bold">
            HokBen WiFi Controller
          </h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Smart captive portal & WiFi controller platform
            for modern customer experience.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#"
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            Terms
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

