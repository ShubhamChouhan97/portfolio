import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import profileAvatar from '@/assets/profile-avatar.jpg';

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
    title: 'Secondary Education (10th)',
    institution: 'Your School Name',
    location: 'City, State',
    period: '2015 - 2016',
    description: 'Completed secondary education with a focus on science and mathematics.',
    highlights: ['85% aggregate', 'Science & Mathematics focus', 'Active in coding club'],
  },
  {
    id: 2,
    type: 'education',
    title: 'Higher Secondary (12th)',
    institution: 'Your School Name',
    location: 'City, State',
    period: '2016 - 2018',
    description: 'Pursued science stream with computer science as a major subject.',
    highlights: ['80% aggregate', 'Computer Science major', 'First programming projects'],
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your University Name',
    location: 'City, State',
    period: '2018 - 2021',
    description: 'Undergraduate degree focusing on computer applications and software development.',
    highlights: [
      'Data Structures & Algorithms',
      'Web Development fundamentals',
      'Database Management Systems',
      'Built multiple academic projects',
    ],
  },
  {
    id: 4,
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    institution: 'Your University Name',
    location: 'City, State',
    period: '2021 - 2023',
    description: 'Postgraduate degree with advanced coursework in software engineering.',
    highlights: [
      'Advanced Software Engineering',
      'Cloud Computing',
      'Machine Learning basics',
      'Capstone project on web applications',
    ],
  },
  {
    id: 5,
    type: 'work',
    title: 'Software Development Intern',
    institution: 'Tech Company Name',
    location: 'City, State',
    period: 'Jan 2023 - Jun 2023',
    description: 'Hands-on internship experience building real-world applications.',
    highlights: [
      'Developed REST APIs using Node.js',
      'Built responsive UI components with React',
      'Collaborated with senior developers',
      'Participated in code reviews',
    ],
  },
  {
    id: 6,
    type: 'work',
    title: 'Software Development Engineer',
    institution: 'Current Company Name',
    location: 'City, State',
    period: 'Jul 2023 - Present',
    description: 'Full-time role as an SDE working on scalable web applications.',
    highlights: [
      'Building and maintaining production applications',
      'Implementing new features and fixing bugs',
      'Code optimization and performance improvements',
      'Mentoring interns and collaborating across teams',
    ],
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
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
          className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
            item.type === 'education'
              ? 'bg-primary border-primary/30'
              : 'bg-accent-foreground border-accent'
          } ${isVisible ? 'scale-100' : 'scale-0'}`}
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
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
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                <span className="text-xs">👨‍💻</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classroom to code — here's the timeline of my educational background and professional experience that shaped me as a developer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {timelineData.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
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
