import { ExternalLink, Github, ArrowUpRight, ArrowRight, Layers, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: 'WhatsApp Clone',
      description:
        'Developed a WhatsApp Clone with a user-friendly interface using React.js. Integrated external APIs to enable real-time chat and a fully functional account management platform.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: true,
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop',
      stats: { feature: 'Real-time', type: 'Full-Stack' },
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Todo App with User Authorization',
      description:
        'Implemented a secure JWT-based authentication system for user login and task access. Enabled personalized task management with full CRUD operations controls.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: true,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      stats: { auth: 'JWT', crud: 'Full' },
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Quiz-Conducting Web App',
      description:
        'Created a real-time quiz platform supporting multiple users and live interactions. Implemented smooth UI with instant question updates and score tracking.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: false,
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cricket Score Calculator',
      description:
        'Developed a real-time cricket scoring application with dynamic run and over tracking. Designed an intuitive UI for live match scoring.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: false,
      icon: Layers,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Snake Game',
      description:
        'Developed a terminal-based snake game with movement, collision logic, and scoring system with 3 levels. Demonstrated core problem-solving in C.',
      tech: ['C Language'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: false,
      icon: Zap,
      gradient: 'from-gray-500 to-slate-500',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description:
        'Built a two-player terminal-based Tic-Tac-Toe game using basic I/O and game logic with win/draw conditions.',
      tech: ['C++ Language'],
      github: 'https://github.com/ShubhamChouhan97',
      featured: false,
      icon: Layers,
      gradient: 'from-indigo-500 to-violet-500',
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(320,90%,55%)]/10 rounded-full blur-[120px]" />
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
                <span className="text-primary font-mono font-bold">03</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground mt-1">
                A selection of projects I've built with passion
              </p>
            </div>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className={`relative grid lg:grid-cols-2 gap-0 glass rounded-3xl border border-border/50 overflow-hidden card-hover ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image Side */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video lg:aspect-auto lg:absolute lg:inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/80 to-transparent" />
                  
                  {/* Floating Stats */}
                  {project.stats && (
                    <div className="absolute bottom-4 left-4 flex gap-3">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="px-4 py-2 rounded-xl glass border border-border/50">
                          <span className={`font-bold text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{value}</span>
                          <span className="text-muted-foreground text-xs ml-1.5 capitalize">{key}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Featured Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border-primary/30`}>
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      Featured Project
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-4 py-2 rounded-xl glass border border-border/50 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium text-sm hover:shadow-lg transition-all duration-300`}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    {'demo' in project && typeof project.demo === 'string' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-border/50 text-foreground font-medium text-sm hover:border-primary/50 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
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
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-wider flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            OTHER NOTABLE PROJECTS
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => {
              const IconComponent = project.icon || Layers;
              return (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative glass rounded-2xl border border-border/50 p-6 card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-[1px] flex-shrink-0`}>
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-muted/50 text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* View All Projects Button */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Button asChild size="lg" className="group rounded-xl relative overflow-hidden">
            <Link to="/projects">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(280,90%,55%)] to-[hsl(320,90%,55%)]" />
              <span className="relative z-10 flex items-center text-white">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
