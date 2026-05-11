import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GeometricBackground from './GeometricBackground';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg pt-20">
      <GeometricBackground />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo with rotating halo + glow */}
          <div
            className="relative mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="absolute inset-0 -m-16 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-primary/40 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-0 -m-10 rounded-full border border-secondary/20 animate-spin-slow" />
            <div className="absolute inset-0 -m-20 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
            <img
              src={logo}
              alt="3:14 Three Fourteen"
              className="relative h-40 md:h-56 lg:h-64 animate-pulse-glow animate-float"
            />
          </div>

          {/* Eyebrow */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm" style={{ animationDelay: '0.15s' }}>
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs uppercase tracking-[0.25em] text-secondary font-medium">Growth Partners · Revenue Operators</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">Luck, </span>
            <span className="gradient-text-gold animate-gradient-shift text-glow-gold">Engineered.</span>
          </h1>
          
          {/* Sub-headline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            We build revenue systems that turn potential into predictable sales. 
            We don't sell services; we invest in your growth.
          </p>
          
          {/* CTA Button */}
          <div 
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="hero" size="lg" className="group" onClick={scrollToApply}>
              Apply for Partnership
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
