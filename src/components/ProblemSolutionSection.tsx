import { X, Check } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 md:py-32 relative geometric-bg">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* The Problem */}
          <div className="card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-destructive/50 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-destructive/10 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agencies get paid regardless of performance. Founders carry all the risk. 
              You pay upfront for promises, not results.
            </p>
          </div>
          
          {/* The Solution */}
          <div className="card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-secondary/50 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">The 3:14 Solution</h3>
            </div>
            
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">→</span>
                <span>We fund initial paid media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">→</span>
                <span>We build the sales system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">→</span>
                <span>We take responsibility for revenue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">→</span>
                <span>We earn only when real sales happen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
