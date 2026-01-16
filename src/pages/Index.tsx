import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import TimelineSection from '@/components/TimelineSection';
import PricingSection from '@/components/PricingSection';
import QualifiersSection from '@/components/QualifiersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <ProblemSolutionSection />
      <TimelineSection />
      <PricingSection />
      <QualifiersSection />
      <Footer />
    </main>
  );
};

export default Index;
