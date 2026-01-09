import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      gradient: 'from-primary/20 to-primary/5',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Real-time collaborative task management app with drag-and-drop functionality and team workspaces.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      gradient: 'from-primary/10 to-primary/20',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
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

        {/* Featured Projects - Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
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
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground"
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
                className={`group flex items-center justify-between p-5 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 ${
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

        {/* View All Projects Button */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
