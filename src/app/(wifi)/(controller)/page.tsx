
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Gallery from "@/components/gallery";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-white
        text-black
        transition-colors
        duration-500
        dark:bg-black
        dark:text-white
      "
    >
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

