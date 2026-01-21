import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:developer@email.com', label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2 font-mono text-xl font-bold text-foreground hover:text-primary transition-colors">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary group-hover:animate-pulse" />
              </div>
            </div>
            <span>
              <span className="text-primary">&lt;</span>
              dev
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright & Built with */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-primary animate-pulse" /> by Shubham Singh Chouhan
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            <span className="text-sm font-medium">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;