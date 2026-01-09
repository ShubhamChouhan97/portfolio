import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Layers,
  Terminal,
  Globe,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'hover:border-blue-500/50',
      iconColor: 'text-blue-400',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'hover:border-green-500/50',
      iconColor: 'text-green-400',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'hover:border-orange-500/50',
      iconColor: 'text-orange-400',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'Redis', level: 65 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'hover:border-purple-500/50',
      iconColor: 'text-purple-400',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
      ],
    },
  ];

  const coreCompetencies = [
    { icon: Code2, label: 'Clean Code', description: 'Writing maintainable, readable code' },
    { icon: Layers, label: 'Architecture', description: 'Scalable system design' },
    { icon: Terminal, label: 'Problem Solving', description: 'DSA & debugging expertise' },
    { icon: Cpu, label: 'Optimization', description: 'Performance-first approach' },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-muted/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary font-mono text-lg md:text-xl block mb-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I've been working with to build scalable and efficient applications
          </p>
        </div>

        {/* Core Competencies */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {coreCompetencies.map((comp, index) => (
            <div
              key={comp.label}
              className={`group text-center p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover-scale ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <comp.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{comp.label}</h4>
              <p className="text-xs text-muted-foreground">{comp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative p-6 bg-card rounded-xl border border-border ${category.borderColor} transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100 + 400}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg bg-background/50 border border-border ${category.iconColor}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with mini bars */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 500}ms` }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-foreground font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color.replace('/20', '')} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 600}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div
          className={`mt-12 py-6 border-t border-b border-border overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex gap-8 animate-marquee">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Git', 'Linux', 'Docker', 'AWS', 'PostgreSQL', 'Redis', 'GraphQL', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={index}
                className="text-muted-foreground/50 font-mono text-sm whitespace-nowrap hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Git', 'Linux', 'Docker', 'AWS', 'PostgreSQL', 'Redis', 'GraphQL', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={`dup-${index}`}
                className="text-muted-foreground/50 font-mono text-sm whitespace-nowrap hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
