import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Implemented RESTful APIs and optimized database queries for better performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      features: ['JWT Auth', 'Cart System', 'Payment Gateway', 'Order Tracking'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Real-time collaborative task management app with drag-and-drop functionality, team workspaces, and automated reminders. Built with WebSocket for live updates.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'Notifications'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'API Rate Limiter',
      description:
        'Middleware solution for Express.js applications implementing token bucket algorithm for API rate limiting. Includes Redis caching for distributed systems.',
      tech: ['Node.js', 'Express', 'Redis', 'TypeScript'],
      features: ['Token Bucket', 'Redis Cache', 'Configurable Limits', 'IP Tracking'],
      github: 'https://github.com',
      featured: false,
    },
    {
      title: 'Portfolio Generator',
      description:
        'CLI tool that generates portfolio websites from a simple configuration file. Supports multiple themes and deployment to GitHub Pages.',
      tech: ['Node.js', 'Handlebars', 'CSS', 'GitHub API'],
      features: ['Multiple Themes', 'Auto Deploy', 'Markdown Support', 'SEO Ready'],
      github: 'https://github.com',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary font-mono text-lg md:text-xl block mb-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built to solve real problems and learn new technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-4 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${index % 2 === 1 ? 'md:text-right' : ''}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="aspect-video bg-card rounded-lg border border-border p-6 flex items-center justify-center group hover:border-primary/50 transition-all duration-300">
                    <div className="text-center">
                      <Folder className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-mono text-sm text-muted-foreground">{project.title}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-card p-4 rounded-lg border border-border mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-mono px-2 py-1 rounded bg-accent text-accent-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <h3
          className={`text-xl font-mono text-foreground text-center mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Other Notable Projects
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={`project-card group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-mono text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
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

export default Projects;
