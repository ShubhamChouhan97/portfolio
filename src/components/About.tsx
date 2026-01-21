import { Link } from 'react-router-dom';
import { Code2, Database, Palette, Zap, ArrowRight, Sparkles, Download,ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    { icon: Code2, text: 'Clean, maintainable code', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, text: 'Scalable backend systems', color: 'from-green-500 to-emerald-500' },
    { icon: Palette, text: 'Polished user interfaces', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, text: 'Performance optimization', color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(320,90%,55%)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(320,90%,55%)] p-[1px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <span className="text-primary font-mono font-bold">01</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">Software Engineer Intern at CodeQuotient</span>, currently 
                pursuing BCA from Geeta University, Panipat. Full-stack developer with hands-on MERN stack experience, 
                including projects like Teacher Bot, DC Dashboard, DocSign, Yupyap and many more.
              </p>
              <p>
                Skilled in building <span className="gradient-text font-semibold">scalable web applications</span>, integrating 
                AI features with Gemini AI, managing secure workflows, and optimizing data performance. I've built real-time 
                features using Socket.io and implemented JWT-based authentication in production apps.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-500 card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Link to="/journey">
                <Button variant="outline" className="group gap-2 font-medium rounded-xl border-primary/30 hover:border-primary hover:bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                  View My Full Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Visual */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-[hsl(320,90%,55%)]/30 rounded-3xl blur-2xl scale-90" />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-primary/20 glow">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating code snippet */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 glass border border-border rounded-2xl p-4 font-mono text-xs shadow-xl glow-sm">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span>{' '}
                    <span className="text-foreground">dev</span> = {'{'}
                    {'\n'}  <span className="text-muted-foreground">role:</span>{' '}
                    <span className="text-green-400">"SDE"</span>,
                    {'\n'}  <span className="text-muted-foreground">exp:</span>{' '}
                    <span className="text-green-400">"1.5y"</span>,
                    {'\n'}  <span className="text-muted-foreground">passion:</span>{' '}
                    <span className="text-green-400">"∞"</span>
                    {'\n'}{'}'};
                  </code>
                </pre>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/40 rounded-lg animate-float" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
              <div className="absolute -top-8 right-1/4 w-6 h-6 border-2 border-[hsl(320,90%,55%)]/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Resume CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="/public/shubham.pdf"
            target="_blank"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-primary/30 hover:border-primary text-foreground font-medium hover:text-primary transition-all duration-300 glow-sm"
          >
            <Download className="h-4 w-4" />
            <span>Resume</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;