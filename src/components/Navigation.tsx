import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 glass border-b border-border/50' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2 font-mono text-xl font-bold text-foreground hover:text-primary transition-colors">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary group-hover:animate-pulse" />
              </div>
            </div>
            <span className="hidden sm:block">
              <span className="text-primary">&lt;</span>
              dev
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            ))}
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="relative overflow-hidden group"
            >
              <div className="relative z-10">
                {isDark ? (
                  <Sun className="h-5 w-5 transition-transform group-hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                )}
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 px-2 rounded-2xl glass border border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;