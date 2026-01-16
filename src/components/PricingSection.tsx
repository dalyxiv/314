import { Percent, Shield, BadgeCheck } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative geometric-bg">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We Win Only If <span className="gradient-text-gold">You Win</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Our interests are 100% aligned with yours.
          </p>
          
          {/* Pricing Card */}
          <div className="card-glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full" />
            
            {/* Main price */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Percent className="w-10 h-10 text-secondary" />
                <span className="text-6xl md:text-7xl font-bold gradient-text-gold">15%</span>
              </div>
              <p className="text-2xl font-semibold text-foreground">Revenue Share</p>
              <p className="text-muted-foreground mt-2">of Net Sales</p>
            </div>
            
            {/* Divider */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            
            {/* Details */}
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">No hidden fees.</span> No setup costs, no monthly retainers, no surprises.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Net Sales defined:</span> Successfully delivered orders—not canceled or refunded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
