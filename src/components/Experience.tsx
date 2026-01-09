import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2024 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      points: [
        'Developed and maintained RESTful APIs serving 10K+ daily active users',
        'Implemented authentication flow using JWT tokens reducing security vulnerabilities',
        'Optimized MongoDB queries resulting in 40% faster page load times',
        'Collaborated with cross-functional teams to deliver features on schedule',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'Software Development Intern',
      company: 'Startup Labs',
      location: 'Remote',
      period: 'Jun 2023 - Dec 2023',
      type: 'Internship',
      description: 'Built reusable components and integrated third-party services for a growing startup.',
      points: [
        'Built reusable React components reducing development time by 25%',
        'Integrated third-party APIs for payment processing and notifications',
        'Fixed critical bugs in production affecting user experience',
        'Documented APIs and created onboarding guides for new team members',
      ],
      skills: ['React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider">04. CAREER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Work Experience
          </h2>
          <div className="h-px w-24 bg-primary/50 mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30" />
                
                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Type Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                        <Briefcase className="h-3.5 w-3.5 text-primary" />
                        <span className="font-mono text-xs text-primary">{exp.type}</span>
                      </div>
                      
                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Period */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-mono text-sm text-foreground">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {exp.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className={`flex gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${index * 150 + pointIndex * 75 + 300}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <span>Download Resume</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
