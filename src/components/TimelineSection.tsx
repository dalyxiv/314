import { FlaskConical, TrendingUp, Users, LogOut } from 'lucide-react';

const phases = [
  {
    number: '01',
    title: 'Validation',
    description: 'We test demand and positioning. 3:14 funds the ads.',
    icon: FlaskConical,
  },
  {
    number: '02',
    title: 'Growth',
    description: 'We scale what works with proven strategies.',
    icon: TrendingUp,
  },
  {
    number: '03',
    title: 'Stabilization',
    description: 'We train your team to own the process.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Exit',
    description: 'Full handover. We create leaders, not dependency.',
    icon: LogOut,
  },
];

const TimelineSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            How It <span className="gradient-text-gold text-glow-gold">Works</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-phase system that builds sustainable growth
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="reveal relative group"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Card */}
                <div className="card-glass card-hover-glow rounded-2xl p-6 md:p-8 text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 glow-purple group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <phase.icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  {/* Number */}
                  <span className="text-sm font-mono text-secondary mb-2 block">{phase.number}</span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                
                {/* Connector dot for desktop */}
                <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
