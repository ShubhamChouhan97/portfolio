import { Briefcase, Calendar, MapPin, ArrowUpRight, Award, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'CodeQuotient',
      location: 'IT Park Panchkula',
      period: 'Feb 2025 - Present',
      type: 'Internship',
      description: 'Contributing to full-stack development with a strong backend focus using Node.js, Express.js, and MongoDB in production-grade applications.',
      points: [
        'Designed and developed a real-time exam cheating and violation monitoring system for an online examination platform',
        'Built a scalable, unique username generation system supporting 10,000+ concurrent users',
        'Implementing JWT-based authentication, role-based access control, and Socket.io for real-time features',
        'Actively working in an Agile environment with sprint planning, daily stand-ups, and code reviews',
      ],
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      gradient: 'from-primary to-[hsl(320,90%,55%)]',
    },
    {
      title: 'Back End Developer (Part-Time)',
      company: 'SanyojM',
      location: 'Panipat, Haryana',
      period: 'Jan 2025 - Feb 2025',
      type: 'Part-time',
      description: 'Collaborated on backend development for client-based applications with focus on performance optimization.',
      points: [
        'Developed and optimized exam and result delivery modules with reliable data handling',
        'Designed and implemented RESTful APIs using Node.js and Express',
        'Used MongoDB for efficient data storage and retrieval',
        'Coordinated on deployment strategies and backend performance optimization',
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Summer Intern',
      company: 'CodeQuotient',
      location: 'Panipat, Haryana',
      period: 'Jun 2024 - Jul 2024',
      type: 'Internship',
      description: 'Gained practical experience in backend development using Node.js with strong foundations in Database Management and DSA.',
      points: [
        'Built hands-on projects including Cricket Score Calculator and User Authorization Panel',
        'Developed a To-Do Application with user authentication',
        'Strengthened understanding of real-world software engineering workflows',
        'Improved problem-solving skills through project-based learning',
      ],
      skills: ['Node.js', 'JavaScript', 'DBMS', 'DSA'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-muted/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[hsl(320,90%,55%)]/5 rounded-full blur-[120px]" />
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
                <span className="text-primary font-mono font-bold">04</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="text-muted-foreground mt-1">
                My professional journey so far
              </p>
            </div>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} transform md:-translate-x-1/2 -translate-y-1/2 top-8 z-10 glow-sm`}>
                  <div className="absolute inset-1 rounded-full bg-background" />
                </div>

                {/* Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass rounded-2xl border border-border/50 overflow-hidden card-hover">
                    {/* Gradient accent */}
                    <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />
                    
                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white text-xs font-medium`}>
                          <Briefcase className="h-3 w-3" />
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border/50 text-muted-foreground text-xs">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      
                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`font-medium bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        {exp.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className={`flex gap-3 p-3 rounded-xl bg-background/50 border border-border/30 transition-all duration-500 ${
                              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}
                            style={{ transitionDelay: `${index * 200 + pointIndex * 75 + 400}ms` }}
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center`}>
                              <Award className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm text-foreground">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`font-mono text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent border border-primary/20 hover:border-primary/40 transition-colors`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-primary/30 hover:border-primary text-foreground font-medium hover:text-primary transition-all duration-300 glow-sm"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;