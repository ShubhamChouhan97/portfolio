const shapes = [
  { type: 'square', size: 40, left: 10, top: 20, duration: 25, delay: 0 },
  { type: 'triangle', size: 30, left: 85, top: 15, duration: 30, delay: 2 },
  { type: 'square', size: 20, left: 75, top: 70, duration: 20, delay: 1 },
  { type: 'triangle', size: 50, left: 5, top: 75, duration: 35, delay: 3 },
  { type: 'square', size: 25, left: 90, top: 45, duration: 28, delay: 0.5 },
  { type: 'triangle', size: 35, left: 50, top: 5, duration: 22, delay: 1.5 },
  { type: 'square', size: 15, left: 30, top: 85, duration: 32, delay: 2.5 },
  { type: 'triangle', size: 25, left: 60, top: 60, duration: 26, delay: 4 },
];

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
      
      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute animate-float-rotate"
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === 'square' ? (
            <div
              className="border border-primary/10 bg-primary/[0.02]"
              style={{ width: shape.size, height: shape.size }}
            />
          ) : (
            <div
              className="border-l border-b border-primary/10"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid hsl(var(--primary) / 0.05)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroBackground;
