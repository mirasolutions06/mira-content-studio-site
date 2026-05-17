import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { WorkflowVideo } from '@/components/WorkflowVideo';
import { Carousel } from '@/components/Carousel';
import { ServicePricing } from '@/components/ServicePricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { SectionReveal } from '@/components/SectionReveal';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkflowVideo />
        <SectionReveal><Carousel /></SectionReveal>
        <SectionReveal><ServicePricing /></SectionReveal>
        <SectionReveal><FAQ /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
