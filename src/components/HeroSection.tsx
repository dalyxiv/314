import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GeometricBackground from './GeometricBackground';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
      <GeometricBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <img 
            src={logo} 
            alt="3:14 Three Fourteen" 
            className="h-20 md:h-28 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          />
          
          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">Luck, </span>
            <span className="gradient-text-gold">Engineered.</span>
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
            <Button variant="hero" size="lg" className="group">
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
