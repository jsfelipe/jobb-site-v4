import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { Features } from '@/components/sections/Features';
import { Ancine } from '@/components/sections/Ancine';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans relative">
      <Header />

      <main className="">
        <Hero />
        <Problem />
        <Solution />
        <TargetAudience />
        <Features />
        <Ancine />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
