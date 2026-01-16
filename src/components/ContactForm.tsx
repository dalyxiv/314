import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', revenue: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-glass rounded-2xl p-12 md:p-16">
              <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Application Received
              </h3>
              <p className="text-muted-foreground text-lg">
                Thank you for your interest in partnering with 3:14. We'll review your
                application and reach out within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Apply for <span className="gradient-text-primary">Partnership</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ready to engineer your luck? Tell us about your business and let's explore
              how we can grow together.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 md:p-12">
            <div className="grid gap-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Company & Revenue Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Monthly Revenue
                  </label>
                  <Input
                    id="revenue"
                    name="revenue"
                    type="text"
                    value={formData.revenue}
                    onChange={handleChange}
                    placeholder="e.g., $10,000 - $50,000"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tell Us About Your Business *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you sell? What are your current challenges? What growth goals do you have?"
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm mt-4">
                By submitting, you agree to a confidential discussion about your business.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
