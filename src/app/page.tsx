import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CallToActionSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}
