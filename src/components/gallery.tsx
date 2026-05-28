
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Gallery
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          WiFi Controller Experience
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Monitoring jaringan, captive portal, analytics realtime,
          dan pengalaman koneksi modern di seluruh outlet HokBen.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        ].map((image, index) => (
          <div
            key={index}
            className="
              group
              overflow-hidden
              rounded-[32px]
              border border-black/10
              bg-black/[0.03]
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <img
              src={image}
              alt="Gallery"
              className="
                h-[420px]
                w-full
                object-cover
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

