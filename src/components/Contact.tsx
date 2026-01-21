import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight, MessageSquare, Clock, Sparkles } from 'lucide-react';
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
    //  Send mail to YOU (Admin)
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    //  Send confirmation mail to USER
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message sent successfully 🎉",
      description: "You’ll receive a confirmation email shortly.",
    });

    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    console.error("EmailJS error:", error);
    toast({
      title: "Failed to send message ❌",
      description: "Please try again later.",
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
      href: 'https://github.com/ShubhamChouhan97',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shubham-singh-chouhan-b11b14285/',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shubhamsc9799@gmail.com',
      gradient: 'from-primary to-[hsl(320,90%,55%)]',
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
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(320,90%,55%)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <span className="text-primary font-mono font-bold">05</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
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
            <div className="glass rounded-2xl border border-border/50 p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:shubhamsc9799@gmail.com" className="text-foreground hover:text-primary transition-colors font-mono text-sm">
                      shubhamsc9799@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-mono text-sm">Chandigarh,Haryana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-foreground font-mono text-sm">+91 9799571509</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-6 glow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[hsl(320,90%,55%)]/10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <span className="font-mono text-sm text-primary font-medium flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Available for Work
                  </span>
                </div>
                <p className="text-sm text-foreground">
                  Open to full-time roles, freelance projects, and interesting collaborations.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 overflow-hidden"
                    aria-label={link.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-white relative z-10 transition-colors" />
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
            <div className="glass rounded-2xl border border-border/50 p-6 md:p-8 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary rounded-xl transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      maxLength={255}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary rounded-xl transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
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
                    className="bg-background/50 border-border/50 focus:border-primary resize-none rounded-xl transition-all duration-300"
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {formData.message.length}/1000
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 rounded-xl font-semibold text-base group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(280,90%,55%)] to-[hsl(320,90%,55%)] opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(320,90%,55%)] via-[hsl(280,90%,55%)] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </span>
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