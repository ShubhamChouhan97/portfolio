import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:bg-[#333] hover:border-[#333]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:developer@email.com',
      color: 'hover:bg-primary hover:border-primary',
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider">05. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <div className="h-px w-24 bg-primary/50 mt-6 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Quick Info Card */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:developer@email.com" className="text-foreground hover:text-primary transition-colors font-mono text-sm">
                      developer@email.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-mono text-sm">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Timezone</p>
                    <p className="text-foreground font-mono text-sm">PST (UTC-8)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="font-mono text-sm text-primary font-medium">Available for Work</span>
              </div>
              <p className="text-sm text-foreground">
                Open to full-time roles, freelance projects, and interesting collaborations.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border transition-all duration-300 ${link.color} hover:text-white`}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      className="bg-background border-border focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      maxLength={255}
                      className="bg-background border-border focus:border-primary h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    required
                    maxLength={1000}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {formData.message.length}/1000
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
