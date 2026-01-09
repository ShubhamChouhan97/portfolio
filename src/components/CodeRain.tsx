const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/[0.03] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/[0.02] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
    </div>
  );
};

export default HeroBackground;
