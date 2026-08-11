import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}