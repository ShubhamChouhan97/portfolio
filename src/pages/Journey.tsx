import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import profileAvatar from '@/assets/profile-avatar.jpg';

// Color stops for timeline gradient based on scroll
const timelineColors = [
  { color: 'hsl(175, 70%, 50%)', name: 'teal' },      // Primary
  { color: 'hsl(200, 70%, 50%)', name: 'blue' },      // Blue
  { color: 'hsl(260, 70%, 60%)', name: 'purple' },    // Purple
  { color: 'hsl(320, 70%, 55%)', name: 'pink' },      // Pink
  { color: 'hsl(45, 90%, 55%)', name: 'gold' },       // Gold
  { color: 'hsl(140, 60%, 45%)', name: 'green' },     // Green
];
interface TimelineItem {
  id: number;
  type: 'education' | 'work';
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Geeta University, Panipat',
    location: 'Panipat, Haryana',
    period: 'Sep 2023 - May 2026',
    description: 'Currently pursuing BCA-SE with hands-on experience in full-stack web development using the MERN stack.',
    highlights: [
      'Roll No: 2309301070',
      '3rd Semester Topper',
      'SIH 2024 Team Leader',
      'Data Structures & Algorithms',
      'Full-Stack Web Development',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Engineer Intern',
    institution: 'CodeQuotient',
    location: 'IT Park Panchkula',
    period: 'Feb 2025 - Present',
    description: 'Contributing to full-stack development with a strong backend focus using Node.js, Express.js, and MongoDB.',
    highlights: [
      'Built real-time exam cheating and violation monitoring system',
      'Scalable username generation system for 10,000+ concurrent users',
      'JWT-based authentication and role-based access control',
      'Socket.io for real-time features',
      'Agile environment with sprint planning and code reviews',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: 'Back End Developer (Part-Time)',
    institution: 'SanyojM',
    location: 'Panipat, Haryana',
    period: 'Jan 2025 - Feb 2025',
    description: 'Collaborated on backend development for client-based applications.',
    highlights: [
      'Developed exam and result delivery modules',
      'Designed RESTful APIs using Node.js and Express',
      'MongoDB for efficient data storage and retrieval',
      'Backend performance optimization and scalability',
    ],
  },
  {
    id: 4,
    type: 'work',
    title: 'Summer Intern',
    institution: 'CodeQuotient',
    location: 'Panipat, Haryana',
    period: 'Jun 2024 - Jul 2024',
    description: 'Gained practical experience in backend development with strong foundations in DBMS and DSA.',
    highlights: [
      'Cricket Score Calculator project',
      'User Authorization Panel with To-Do App',
      'Basic To-Do Application',
      'Project-based learning approach',
    ],
  },
];

const TimelineCard = ({ item, index, scrollColor }: { item: TimelineItem; index: number; scrollColor: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
          style={{ 
            backgroundColor: scrollColor,
            borderColor: `${scrollColor}50`,
            boxShadow: `0 0 12px ${scrollColor}60`
          }}
        />
      </div>

      {/* Content card */}
      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : `opacity-0 ${isLeft ? 'md:-translate-x-8' : 'md:translate-x-8'} translate-y-4`
        }`}
        style={{ transitionDelay: '150ms' }}
      >
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
          {/* Type badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                item.type === 'education'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-accent text-accent-foreground'
              }`}
            >
              {item.type === 'education' ? (
                <GraduationCap className="h-3 w-3" />
              ) : (
                <Briefcase className="h-3 w-3" />
              )}
              {item.type === 'education' ? 'Education' : 'Experience'}
            </span>
          </div>

          {/* Title & Institution */}
          <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-primary font-mono text-sm mb-2">{item.institution}</p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

          {/* Highlights */}
          {item.highlights && (
            <ul className="space-y-1.5">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1.5">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

const Journey = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentColor, setCurrentColor] = useState(timelineColors[0].color);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const timelineTop = rect.top + window.scrollY;
      const timelineHeight = rect.height;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the timeline
      const start = timelineTop - viewportHeight;
      const end = timelineTop + timelineHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
      
      setScrollProgress(progress);
      
      // Get color based on progress
      const colorIndex = Math.min(
        Math.floor(progress * timelineColors.length),
        timelineColors.length - 1
      );
      setCurrentColor(timelineColors[colorIndex].color);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link to="/#about">
              <Button variant="ghost" size="sm" className="gap-2 font-mono">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <a href="#" className="font-mono text-lg font-semibold text-foreground hover:text-primary transition-colors">
              <span className="text-primary">&lt;</span>
              dev
              <span className="text-primary">/&gt;</span>
            </a>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="section-padding">
        <div className="section-container">
          {/* Page Title with Avatar */}
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Profile Avatar */}
            <div className="relative inline-block mb-6">
              <div 
                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 shadow-lg transition-all duration-500"
                style={{ 
                  borderColor: `${currentColor}50`,
                  boxShadow: `0 10px 40px ${currentColor}30`
                }}
              >
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-background transition-colors duration-500"
                style={{ backgroundColor: currentColor }}
              >
                <span className="text-xs">👨‍💻</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="transition-colors duration-500" style={{ color: currentColor }}>Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classroom to code — here's the timeline of my educational background and professional experience that shaped me as a developer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Animated vertical line with gradient */}
            <div className="absolute left-[22px] md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
              <div 
                className="absolute top-0 left-0 right-0 transition-all duration-300"
                style={{ 
                  height: `${scrollProgress * 100}%`,
                  background: `linear-gradient(180deg, ${timelineColors.map((c, i) => 
                    `${c.color} ${(i / (timelineColors.length - 1)) * 100}%`
                  ).join(', ')})`,
                  boxShadow: `0 0 10px ${currentColor}80`
                }}
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {timelineData.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} scrollColor={currentColor} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="section-container text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Built with passion and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Journey;
