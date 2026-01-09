import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    const interval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.7;
      if (shouldGlitch) {
        const glitched = "404".split("").map((char, i) => 
          Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText("404"), 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm hidden md:block animate-pulse">
        {"<Error code={404} />"}
      </div>
      <div className="absolute bottom-32 right-16 text-primary/20 font-mono text-sm hidden md:block animate-pulse" style={{ animationDelay: '1s' }}>
        {"throw new PageNotFoundError();"}
      </div>
      <div className="absolute top-1/3 right-20 text-primary/20 font-mono text-sm hidden lg:block animate-pulse" style={{ animationDelay: '0.5s' }}>
        {"// TODO: Fix broken link"}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Terminal window */}
        <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden mb-8">
          {/* Terminal header */}
          <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
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
            
            {/* 404 ASCII art style */}
            <div className="text-6xl md:text-8xl font-bold text-primary my-8 text-center tracking-wider">
              {glitchText}
            </div>

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
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Fun suggestion */}
        <p className="text-muted-foreground text-sm mt-8 font-mono">
          Error Code: 404 | Status: Lost in the void
        </p>
      </div>
    </div>
  );
};

export default NotFound;
