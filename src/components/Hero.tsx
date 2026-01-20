import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroBackground from './CodeRain';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Development Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <HeroBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(320,90%,55%)]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40 animate-particle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>

          {/* Greeting */}
          <p className="font-mono text-primary text-base md:text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi there, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 opacity-0 animate-fade-in leading-tight" style={{ animationDelay: '0.4s' }}>
            <span className="text-foreground">Shubham</span>{' '}
            <span className="gradient-text">Singh Chouhan</span>
          </h1>

          {/* Title with typing effect */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 flex items-center gap-2">
            <span className="text-foreground/60">&lt;</span>
            <span>{displayText}</span>
            <span className="typing-cursor" />
            <span className="text-foreground/60">/&gt;</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Dedicated <span className="text-primary font-semibold">Full-Stack Developer</span> with hands-on experience in the{' '}
            <span className="font-mono text-primary">MERN Stack</span>. 
            Building real-world web applications with RESTful APIs, JWT authentication, and Socket.io for real-time features.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
              <a href="#projects">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(280,90%,55%)] to-[hsl(320,90%,55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="group" asChild>
              <a href="#contact">
                <Download className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="text-sm text-muted-foreground mr-4">Find me on</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/ShubhamChouhan97"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl glass border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-singh-chouhan-b11b14285/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl glass border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:shubhamsc9799@gmail.com"
                className="group w-12 h-12 rounded-xl glass border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-xs text-muted-foreground font-mono">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;