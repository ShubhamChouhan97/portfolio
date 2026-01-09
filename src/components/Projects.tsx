import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Real-time collaborative task management app with drag-and-drop functionality and team workspaces.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'API Rate Limiter',
      description:
        'Middleware solution for Express.js implementing token bucket algorithm with Redis caching.',
      tech: ['Node.js', 'Express', 'Redis', 'TypeScript'],
      github: 'https://github.com',
      featured: false,
    },
    {
      title: 'Portfolio Generator',
      description:
        'CLI tool that generates portfolio websites from config files with multiple themes.',
      tech: ['Node.js', 'Handlebars', 'GitHub API'],
      github: 'https://github.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
          <span className="text-primary font-mono text-sm tracking-wider">03. WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
          <div className="h-px w-24 bg-primary/50 mt-4" />
        </div>

        {/* Featured Projects - Unified Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-primary px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                    Featured
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-wider">
            OTHER NOTABLE PROJECTS
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {project.tech.join(' • ')}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all ml-4 flex-shrink-0 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
