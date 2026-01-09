import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Layers,
  Terminal,
  Globe,
  Cpu,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      accentColor: 'cyan',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
      title: 'Backend',
      icon: Server,
      accentColor: 'green',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database',
      icon: Database,
      accentColor: 'orange',
      skills: ['MongoDB', 'Mongoose', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      accentColor: 'purple',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'AWS'],
    },
  ];

  const coreCompetencies = [
    { icon: Code2, label: 'Clean Code', description: 'Maintainable & readable' },
    { icon: Layers, label: 'Architecture', description: 'Scalable design' },
    { icon: Terminal, label: 'Problem Solving', description: 'DSA expertise' },
    { icon: Cpu, label: 'Optimization', description: 'Performance-first' },
  ];

  const getAccentClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
      cyan: {
        border: 'group-hover:border-cyan-500/50',
        bg: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
        text: 'text-cyan-500',
        glow: 'bg-cyan-500/20',
      },
      green: {
        border: 'group-hover:border-green-500/50',
        bg: 'from-green-500/10 via-green-500/5 to-transparent',
        text: 'text-green-500',
        glow: 'bg-green-500/20',
      },
      orange: {
        border: 'group-hover:border-orange-500/50',
        bg: 'from-orange-500/10 via-orange-500/5 to-transparent',
        text: 'text-orange-500',
        glow: 'bg-orange-500/20',
      },
      purple: {
        border: 'group-hover:border-purple-500/50',
        bg: 'from-purple-500/10 via-purple-500/5 to-transparent',
        text: 'text-purple-500',
        glow: 'bg-purple-500/20',
      },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section
      id="skills"
      className="section-padding bg-muted/30 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Crafting digital experiences with modern tools and technologies
          </p>
        </div>

        {/* Core Competencies - Unified Cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {coreCompetencies.map((comp, index) => (
            <div
              key={comp.label}
              className={`group relative text-center p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <comp.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{comp.label}</h4>
                <p className="text-xs text-muted-foreground">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid - Unified Cards with Color Accents */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const accent = getAccentClasses(category.accentColor);
            
            return (
              <div
                key={category.title}
                className={`group relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden transition-all duration-500 ${accent.border} hover:shadow-2xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150 + 400}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Corner glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${accent.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-muted/50 border border-border group-hover:scale-110 transition-all duration-300`}>
                      <category.icon className={`h-6 w-6 ${accent.text}`} />
                    </div>
                    <div>
                      <h3 className="font-mono text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`font-mono text-xs px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground border border-border hover:border-primary/30 transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 500}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
