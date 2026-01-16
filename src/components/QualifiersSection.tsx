import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const qualifiers = [
  'Must have a sellable product with healthy margins',
  'Must be operationally ready to fulfill orders',
  'Must be transparent and willing to trust the data',
];

const QualifiersSection = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="qualifiers" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who We <span className="gradient-text-primary">Work With</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We're selective because true partnership requires the right fit.
            </p>
          </div>
          
          {/* Checklist */}
          <div className="space-y-4 mb-12">
            {qualifiers.map((qualifier, index) => (
              <div 
                key={index}
                className="card-glass rounded-xl p-5 flex items-center gap-4 hover:border-secondary/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-lg text-foreground">{qualifier}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group" onClick={scrollToApply}>
              Apply for Partnership
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifiersSection;
