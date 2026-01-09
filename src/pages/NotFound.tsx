import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState("404");
  const [clicks, setClicks] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const [easterEggMessage, setEasterEggMessage] = useState("");
  const [isDark, setIsDark] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Glitch effect
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    const interval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.7;
      if (shouldGlitch && !isExploding) {
        const glitched = "404".split("").map((char) => 
          Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText("404"), 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isExploding]);

  const easterEggMessages = [
    "You found the secret! 🎉",
    "404 reasons to keep coding! 💻",
    "Error: Too much awesomeness! ✨",
    "You broke the matrix! 🕶️",
    "Achievement unlocked: Bug Hunter! 🐛",
    "Console.log('You rock!') 🎸",
    "git commit -m 'Found easter egg' 🥚",
  ];

  const handleClick = (e: React.MouseEvent) => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    // Create explosion particles
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colors = isDark 
      ? ['#00ff88', '#00ccff', '#ff00ff', '#ffff00', '#ff6600']
      : ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);

    // Easter egg triggers
    if (newClicks === 5) {
      setIsExploding(true);
      setEasterEggMessage(easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)]);
      setTimeout(() => {
        setIsExploding(false);
        setEasterEggMessage("");
        setClicks(0);
      }, 3000);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 overflow-hidden relative transition-colors duration-500 ${
      isDark 
        ? 'bg-background' 
        : 'bg-gradient-to-br from-background via-muted/30 to-background'
    }`}>
      {/* Background pattern - different for light/dark */}
      <div className="absolute inset-0">
        {isDark ? (
          // Dark mode: Matrix-style grid
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        ) : (
          // Light mode: Soft gradient circles
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </>
        )}
      </div>

      {/* Floating code snippets - styled differently per mode */}
      <div className={`absolute top-20 left-10 font-mono text-sm hidden md:block animate-pulse ${
        isDark ? 'text-primary/30' : 'text-primary/40'
      }`}>
        {"<Error code={404} />"}
      </div>
      <div className={`absolute bottom-32 right-16 font-mono text-sm hidden md:block animate-pulse ${
        isDark ? 'text-primary/30' : 'text-primary/40'
      }`} style={{ animationDelay: '1s' }}>
        {"throw new PageNotFoundError();"}
      </div>
      <div className={`absolute top-1/3 right-20 font-mono text-sm hidden lg:block animate-pulse ${
        isDark ? 'text-primary/30' : 'text-primary/40'
      }`} style={{ animationDelay: '0.5s' }}>
        {"// TODO: Fix broken link"}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Terminal window */}
        <div className={`border rounded-lg shadow-2xl overflow-hidden mb-8 transition-all duration-300 ${
          isDark 
            ? 'bg-card border-border' 
            : 'bg-card/80 backdrop-blur-sm border-border/50 shadow-primary/5'
        }`}>
          {/* Terminal header */}
          <div className={`px-4 py-3 flex items-center gap-2 border-b ${
            isDark ? 'bg-muted border-border' : 'bg-muted/50 border-border/50'
          }`}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
            </div>
            <span className="text-muted-foreground text-sm font-mono ml-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              terminal
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 font-mono text-left">
            <div className="text-muted-foreground mb-2">
              <span className="text-primary">$</span> cd {location.pathname}
            </div>
            <div className="text-destructive mb-4">
              bash: cd: {location.pathname}: No such file or directory
            </div>
            
            {/* 404 with easter egg */}
            <div 
              className="relative my-8 flex justify-center"
              onClick={handleClick}
            >
              {/* Particles */}
              {particles.map(particle => (
                <span
                  key={particle.id}
                  className="absolute w-3 h-3 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: particle.x,
                    top: particle.y,
                    backgroundColor: particle.color,
                    animation: 'explode 1s ease-out forwards'
                  }}
                />
              ))}

              <span 
                className={`text-6xl md:text-8xl font-bold cursor-pointer select-none transition-all duration-300 ${
                  isExploding 
                    ? 'animate-bounce scale-125' 
                    : 'hover:scale-110'
                } ${
                  isDark 
                    ? 'text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]' 
                    : 'text-primary drop-shadow-lg'
                }`}
                style={{
                  textShadow: isDark 
                    ? '0 0 30px hsl(var(--primary) / 0.3)' 
                    : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {isExploding ? "🎉" : glitchText}
              </span>

              {/* Click hint */}
              {clicks > 0 && clicks < 5 && !isExploding && (
                <span className="absolute -bottom-6 text-xs text-muted-foreground">
                  {5 - clicks} more clicks...
                </span>
              )}
            </div>

            {/* Easter egg message */}
            {easterEggMessage && (
              <div className={`text-center mb-4 py-2 px-4 rounded-lg animate-fade-in flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-primary/10 text-primary'
              }`}>
                <Sparkles className="w-4 h-4" />
                {easterEggMessage}
                <Sparkles className="w-4 h-4" />
              </div>
            )}

            <div className="text-muted-foreground mb-2">
              <span className="text-primary">$</span> echo "Page not found"
            </div>
            <div className="text-foreground mb-4">
              The page you're looking for doesn't exist or has been moved.
            </div>

            <div className="text-muted-foreground">
              <span className="text-primary">$</span> <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Fun suggestion */}
        <p className={`text-sm mt-8 font-mono ${
          isDark ? 'text-muted-foreground' : 'text-muted-foreground/80'
        }`}>
          {isDark ? '🌙' : '☀️'} Error Code: 404 | Status: Lost in the {isDark ? 'dark' : 'light'}
        </p>
      </div>

      {/* Explosion animation keyframes */}
      <style>{`
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px),
              calc(-50% + ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px)
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
