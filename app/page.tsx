import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RoyalLifestyle from '@/components/RoyalLifestyle';
import PuppyGrid from '@/components/PuppyGrid';
import DNAEducation from '@/components/DNAEducation';
import Gallery from '@/components/Gallery';
import HealthGuarantee from '@/components/HealthGuarantee';
import DeliverySection from '@/components/DeliverySection';
import AreasServed from '@/components/AreasServed';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FrenchieRadio from '@/components/FrenchieRadio';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <RoyalLifestyle />
      <PuppyGrid />
      <DNAEducation />
      <Gallery />
      <HealthGuarantee />
      <DeliverySection />
      <AreasServed />
      <Contact />
      <Footer />
      <FrenchieRadio />
    </main>
  );
}
