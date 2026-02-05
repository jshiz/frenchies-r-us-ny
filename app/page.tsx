import Hero from '@/components/Hero';
import About from '@/components/About';
import RoyalLifestyle from '@/components/RoyalLifestyle';
import PuppyGrid from '@/components/PuppyGrid';
import DNAEducation from '@/components/DNAEducation';
import Gallery from '@/components/Gallery';
import HealthGuarantee from '@/components/HealthGuarantee';
import ExtendedFeatures from '@/components/ExtendedFeatures';
import DeliverySection from '@/components/DeliverySection';
import AreasServed from '@/components/AreasServed';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <RoyalLifestyle />
      <PuppyGrid />
      <DNAEducation />
      <Gallery />
      <HealthGuarantee />
      <ExtendedFeatures />
      <DeliverySection />
      <AreasServed />
      <Contact />
    </main>
  );
}
