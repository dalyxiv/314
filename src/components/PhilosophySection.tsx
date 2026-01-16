const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            We Don't Believe in <span className="gradient-text-primary">Coincidence.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            3:14 has always been our lucky hour. But we don't wait for luck—we engineer outcomes. 
            We turn timing, effort, and strategy into measurable results.
          </p>
          
          {/* Key Concept Card */}
          <div className="card-glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
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
