import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AICopilot from '@/components/AICopilot';
import TabbedFeatures from '@/components/TabbedFeatures';
import JobListings from '@/components/JobListings';
import Testimonial from '@/components/Testimonial';
import WaitlistCTA from '@/components/WaitlistCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AICopilot />
      <TabbedFeatures />
      <JobListings />
      <Testimonial />
      <WaitlistCTA />
      <Footer />
    </>
  );
}
