import { Quote, Infinity as InfinityIcon } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <InfinityIcon className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary/90 font-medium">Our Philosophy</span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            We Don't Believe in <span className="gradient-text-primary text-glow-purple">Coincidence.</span>
          </h2>
          
          <p className="reveal text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            3:14 has always been our lucky hour. But we don't wait for luck—we engineer outcomes. 
            We turn timing, effort, and strategy into measurable results.
          </p>
          
          {/* Key Concept Card */}
          <div className="reveal card-glass card-hover-glow rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary" />
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic relative">
              "Small businesses can't afford experts. But experts can afford small businesses. 
              That's why 3:14 invests in you first."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
