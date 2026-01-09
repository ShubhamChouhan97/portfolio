import { Code2, Database, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, text: 'Clean, maintainable code' },
    { icon: Database, text: 'Scalable backend systems' },
    { icon: Palette, text: 'Polished user interfaces' },
    { icon: Zap, text: 'Performance optimization' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              <span className="text-primary font-mono text-lg md:text-xl block mb-2">01.</span>
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary/30 mb-8" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Development Engineer with a passion for building web applications that make a difference. 
                My journey started with an internship where I discovered the thrill of solving real-world problems through code.
              </p>
              <p>
                Currently, I focus on the <span className="text-primary font-mono">JavaScript ecosystem</span>, working with 
                React for frontend development and Node.js for backend services. I believe in writing clean, 
                efficient code that's easy to maintain and scale.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or diving deep into system design concepts. I'm always eager to learn and tackle new challenges.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-accent">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Code block visual */}
              <div className="w-64 h-72 md:w-80 md:h-96 bg-card rounded-lg border border-border p-4 font-mono text-xs md:text-sm overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span> developer = {'{'}
                    {'\n'}  name: <span className="text-accent-foreground">"John"</span>,
                    {'\n'}  role: <span className="text-accent-foreground">"SDE"</span>,
                    {'\n'}  exp: <span className="text-accent-foreground">"1.5 years"</span>,
                    {'\n'}  skills: [
                    {'\n'}    <span className="text-accent-foreground">"JavaScript"</span>,
                    {'\n'}    <span className="text-accent-foreground">"React"</span>,
                    {'\n'}    <span className="text-accent-foreground">"Node.js"</span>,
                    {'\n'}    <span className="text-accent-foreground">"MongoDB"</span>
                    {'\n'}  ],
                    {'\n'}  passion: <span className="text-primary">true</span>
                    {'\n'}{'}'};
                  </code>
                </pre>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-lg -z-10 translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
