import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import TimelineSection from '@/components/TimelineSection';
import PricingSection from '@/components/PricingSection';
import QualifiersSection from '@/components/QualifiersSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <SpaceBackground />
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ProblemSolutionSection />
      <TimelineSection />
      <PricingSection />
      <QualifiersSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
