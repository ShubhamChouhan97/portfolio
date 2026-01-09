import { Link } from 'react-router-dom';
import { Code2, Database, Palette, Zap, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    { icon: Code2, text: 'Clean, maintainable code' },
    { icon: Database, text: 'Scalable backend systems' },
    { icon: Palette, text: 'Polished user interfaces' },
    { icon: Zap, text: 'Performance optimization' },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`order-2 md:order-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              <span className="text-primary font-mono text-lg md:text-xl block mb-2">01.</span>
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary/30 mb-8" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Development Engineer with a passion for building web applications that make a difference. 
                With a strong foundation in Computer Applications (BCA & MCA), I bring both academic knowledge and hands-on experience to the table.
              </p>
              <p>
                Currently, I focus on the <span className="text-primary font-mono">JavaScript ecosystem</span>, working with 
                React for frontend development and Node.js for backend services. I believe in writing clean, 
                efficient code that's easy to maintain and scale.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="p-2 rounded-md bg-accent">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA to Journey page */}
            <div
              className={`mt-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Link to="/journey">
                <Button variant="outline" className="gap-2 font-mono group">
                  View My Full Journey
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Photo with Code Visual */}
          <div
            className={`order-1 md:order-2 flex justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating code snippet */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-3 font-mono text-xs shadow-lg">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span> dev = {'{'}
                    {'\n'}  role: <span className="text-accent-foreground">"SDE"</span>,
                    {'\n'}  exp: <span className="text-accent-foreground">"1.5y"</span>
                    {'\n'}{'}'};
                  </code>
                </pre>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
