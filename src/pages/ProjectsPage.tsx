import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop',
      ],
    },
    {
      title: 'API Rate Limiter',
      description:
        'Middleware solution for Express.js implementing token bucket algorithm with Redis caching. Provides configurable rate limiting with support for multiple strategies.',
      problem: 'APIs needed protection against abuse while maintaining fair usage for legitimate users.',
      tech: ['Node.js', 'Express', 'Redis', 'TypeScript', 'Jest'],
      features: ['Token bucket algorithm', 'Redis-backed storage', 'Configurable limits', 'IP & user-based limiting', 'Sliding window support', 'Detailed analytics'],
      github: 'https://github.com',
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop',
      ],
    },
    {
      title: 'Portfolio Generator',
      description:
        'CLI tool that generates portfolio websites from config files with multiple themes. Supports custom components and automatic deployment to various platforms.',
      problem: 'Developers wanted a quick way to create professional portfolios without starting from scratch.',
      tech: ['Node.js', 'Handlebars', 'GitHub API', 'Commander.js', 'Chalk'],
      features: ['Multiple themes', 'Custom components', 'GitHub integration', 'Auto-deployment', 'SEO optimization', 'Analytics integration'],
      github: 'https://github.com',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=800&fit=crop',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&h=800&fit=crop',
      ],
    },
  ];

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

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
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm tracking-wider">ALL PROJECTS</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2">
              My Work
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of projects I've built, from full-stack applications to developer tools. 
              Each project represents a unique challenge and learning experience.
            </p>
            <div className="h-px w-24 bg-primary/50 mt-6 mx-auto" />
          </div>

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, projectIndex) => (
              <article
                key={project.title}
                className="group"
              >
                {/* Project Card */}
                <div className="bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300">
                  {/* Image Carousel */}
                  <ImageCarousel 
                    images={project.images} 
                    title={project.title}
                    onImageClick={(index) => openLightbox(project.images, index)}
                  />

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <span className="font-mono text-xs text-primary uppercase tracking-wider">
                            Project {String(projectIndex + 1).padStart(2, '0')}
                          </span>
                          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description}
                        </p>

                        {/* Problem Statement */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                          <span className="font-mono text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Problem Solved
                          </span>
                          <p className="text-foreground mt-2">{project.problem}</p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 pt-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:bg-primary transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Key Features */}
                        <div>
                          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Key Features</span>
                          <ul className="mt-4 grid gap-3">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-3 text-foreground">
                                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <span className="w-2 h-2 rounded-full bg-primary" />
                                </span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</span>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-sm px-4 py-2 rounded-full bg-muted/50 text-foreground border border-border hover:border-primary/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-border">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Arrows */}
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-50 p-3 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-50 p-3 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={lightboxImages[lightboxIndex]}
              alt="Project screenshot"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />

            {/* Image Counter */}
            {lightboxImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 text-foreground font-mono text-sm">
                {lightboxIndex + 1} / {lightboxImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

// Image Carousel Component
interface ImageCarouselProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageCarousel = ({ images, title, onImageClick }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group/carousel">
      {/* Main Image */}
      <div 
        className="relative aspect-video overflow-hidden cursor-pointer"
        onClick={() => onImageClick(currentIndex)}
      >
        <img
          src={images[currentIndex]}
          alt={`${title} - Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 text-foreground font-medium">
            <Expand className="h-5 w-5" />
            Click to expand
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-background/80 backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`w-12 h-8 rounded-md overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-primary scale-110' 
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
