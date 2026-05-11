import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '$0', label: 'Upfront cost', sub: 'We invest first' },
  { icon: TrendingUp, value: '15%', label: 'Revenue share', sub: 'Only on net sales' },
  { icon: Target, value: '4', label: 'Phase system', sub: 'From test to exit' },
  { icon: Zap, value: '100%', label: 'Aligned', sub: 'We win when you win' },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal card-glass card-hover-glow rounded-2xl p-6 md:p-8 text-center group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-gold mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;