import { useState } from 'react';
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
  Sparkles,
  Zap
} from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Tailwind', level: 85, icon: '💨' },
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      gradient: 'from-green-500 to-emerald-400',
      bgGradient: 'from-green-500/10 via-emerald-500/5 to-transparent',
      skills: [
        { name: 'Node.js', level: 88, icon: '💚' },
        { name: 'Express.js', level: 88, icon: '🚂' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'Socket.io', level: 75, icon: '🔄' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      gradient: 'from-orange-500 to-amber-400',
      bgGradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'SQL', level: 75, icon: '📊' },
        { name: 'Redis', level: 70, icon: '⚡' },
      ],
    },
    {
      title: 'Tools & Languages',
      icon: Wrench,
      gradient: 'from-purple-500 to-pink-400',
      bgGradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
      skills: [
        { name: 'Git', level: 85, icon: '📦' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'C/C++', level: 80, icon: '⚙️' },
        { name: 'EC2', level: 65, icon: '☁️' },
        { name: 'MS Office', level: 80, icon: '📝' },
      ],
    },
  ];

  const coreCompetencies = [
    { icon: Code2, label: 'MERN Stack', description: 'Full-stack development', gradient: 'from-primary to-[hsl(280,90%,55%)]' },
    { icon: Layers, label: 'OOP', description: 'Object-Oriented Design', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Terminal, label: 'Problem Solving', description: 'DSA & Critical Thinking', gradient: 'from-green-500 to-emerald-500' },
    { icon: Cpu, label: 'API Integration', description: 'RESTful Services', gradient: 'from-orange-500 to-amber-500' },
  ];

  const techStack = [
    'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 
    'Tailwind CSS', 'Git', 'C', 'C++', 'SQL', 
    'Redis', 'JWT', 'Socket.io', 'Postman', 'EC2'
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-muted/30 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-[hsl(320,90%,55%)]/10 rounded-full blur-[120px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Crafting digital experiences with modern tools and technologies
          </p>
        </div>

        {/* Core Competencies */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {coreCompetencies.map((comp, index) => (
            <div
              key={comp.label}
              className={`group relative text-center p-6 rounded-2xl glass border border-border/50 overflow-hidden card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${comp.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <comp.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{comp.label}</h4>
                <p className="text-xs text-muted-foreground">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative p-8 glass rounded-3xl border border-border/50 overflow-hidden card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150 + 400}ms` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              {/* Corner decoration */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group/skill relative p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 75 + 500}ms` }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      
                      {/* Animated progress bar */}
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 75 + 600}ms`,
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full ${hoveredSkill === skill.name ? 'animate-shimmer' : ''}`} />
                        </div>
                      </div>
                      
                      {/* Percentage badge */}
                      <div className={`absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-[10px] font-mono text-white shadow-lg transition-all duration-300 ${hoveredSkill === skill.name ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tech Bubbles */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <Zap className="h-4 w-4 text-primary" />
              technologies I work with
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className={`group px-5 py-2.5 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: `${index * 50 + 1000}ms`,
                }}
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div
          className={`mt-12 py-4 relative overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <div className="flex gap-12 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="text-3xl md:text-4xl font-bold text-muted-foreground/10 whitespace-nowrap font-mono"
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