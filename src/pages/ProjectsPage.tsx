import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Implemented secure payment processing with Stripe and built a comprehensive admin dashboard.',
      problem: 'Small businesses needed an affordable, customizable e-commerce solution that could scale with their growth.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      features: ['User authentication & authorization', 'Product catalog with search & filters', 'Shopping cart & wishlist', 'Secure payment processing', 'Order tracking', 'Admin dashboard'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Real-time collaborative task management app with drag-and-drop functionality and team workspaces. Built with WebSocket integration for live updates across all connected clients.',
      problem: 'Remote teams struggled with project visibility and real-time collaboration on task management.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'DnD Kit', 'Framer Motion'],
      features: ['Real-time collaboration', 'Drag-and-drop interface', 'Team workspaces', 'Task comments & attachments', 'Progress tracking', 'Email notifications'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    },
    {
      title: 'API Rate Limiter',
      description:
        'Middleware solution for Express.js implementing token bucket algorithm with Redis caching. Provides configurable rate limiting with support for multiple strategies.',
      problem: 'APIs needed protection against abuse while maintaining fair usage for legitimate users.',
      tech: ['Node.js', 'Express', 'Redis', 'TypeScript', 'Jest'],
      features: ['Token bucket algorithm', 'Redis-backed storage', 'Configurable limits', 'IP & user-based limiting', 'Sliding window support', 'Detailed analytics'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    },
    {
      title: 'Portfolio Generator',
      description:
        'CLI tool that generates portfolio websites from config files with multiple themes. Supports custom components and automatic deployment to various platforms.',
      problem: 'Developers wanted a quick way to create professional portfolios without starting from scratch.',
      tech: ['Node.js', 'Handlebars', 'GitHub API', 'Commander.js', 'Chalk'],
      features: ['Multiple themes', 'Custom components', 'GitHub integration', 'Auto-deployment', 'SEO optimization', 'Analytics integration'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts. Features a responsive design with dark mode support.',
      problem: 'Users wanted a clean, ad-free weather app with accurate forecasts and severe weather notifications.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'PWA'],
      features: ['7-day forecast', 'Hourly predictions', 'Interactive weather maps', 'Severe weather alerts', 'Location search', 'Offline support'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="section-container">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">ALL PROJECTS</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              My Work
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              A collection of projects I've built, from full-stack applications to developer tools. 
              Each project represents a unique challenge and learning experience.
            </p>
            <div className="h-px w-24 bg-primary/50 mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group grid lg:grid-cols-2 gap-8 items-start"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl border border-border ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <span className="font-mono text-xs text-primary uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Key Features</span>
                    <ul className="mt-2 grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

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

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
