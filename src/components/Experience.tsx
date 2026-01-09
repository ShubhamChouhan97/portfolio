import { Briefcase, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Tech Company Inc.',
      period: 'Jan 2024 - Present',
      type: 'Full-time',
      accentColor: 'emerald',
      points: [
        'Developed and maintained RESTful APIs serving 10K+ daily active users',
        'Implemented authentication flow using JWT tokens reducing security vulnerabilities',
        'Optimized MongoDB queries resulting in 40% faster page load times',
        'Collaborated with cross-functional teams to deliver features on schedule',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'Startup Labs',
      period: 'Jun 2023 - Dec 2023',
      type: 'Internship',
      accentColor: 'blue',
      points: [
        'Built reusable React components reducing development time by 25%',
        'Integrated third-party APIs for payment processing and notifications',
        'Fixed critical bugs in production affecting user experience',
        'Participated in agile sprints and daily standups',
        'Documented APIs and created onboarding guides for new team members',
      ],
    },
  ];

  const getAccentClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
      emerald: {
        border: 'group-hover:border-emerald-500/50',
        bg: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
        text: 'text-emerald-500',
        glow: 'bg-emerald-500/20',
      },
      blue: {
        border: 'group-hover:border-blue-500/50',
        bg: 'from-blue-500/10 via-blue-500/5 to-transparent',
        text: 'text-blue-500',
        glow: 'bg-blue-500/20',
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section
      id="experience"
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
            <span className="text-primary font-mono text-lg md:text-xl block mb-2">04.</span>
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
              }`}
              style={{ transformOrigin: 'top' }}
            />

            {experiences.map((exp, index) => {
              const accent = getAccentClasses(exp.accentColor);
              
              return (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  />

                  {/* Content - Unified Card */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`group relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden transition-all duration-500 ${accent.border} hover:shadow-2xl hover:-translate-y-1`}>
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                      
                      {/* Corner glow */}
                      <div className={`absolute -top-20 -right-20 w-40 h-40 ${accent.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-2 ${accent.text} font-mono text-sm mb-2`}>
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                        <p className="text-primary font-mono text-sm mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className={`flex gap-3 text-sm text-muted-foreground transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                              }`}
                              style={{ transitionDelay: `${index * 200 + pointIndex * 50 + 400}ms` }}
                            >
                              <span className="text-primary mt-1">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
