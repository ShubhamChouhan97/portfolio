import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Mongoose', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'AWS'],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-muted/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100 + 200}ms` }}
            >
              <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`skill-tag transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 400}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
