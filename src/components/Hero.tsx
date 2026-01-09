import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="font-mono text-primary text-sm md:text-base mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            John Developer
          </h1>

          {/* Title with typing effect */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
            <span>{displayText}</span>
            <span className="typing-cursor" />
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            building scalable web applications with <span className="text-primary font-mono">1.5+ years</span> of hands-on experience. 
            I specialize in crafting performant backends and polished user interfaces using modern JavaScript technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:developer@email.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
