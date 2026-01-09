const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wireframe grid */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Animated horizontal scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-y" />
      
      {/* Animated vertical scan line */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan-x" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary/10" />
    </div>
  );
};

export default HeroBackground;
