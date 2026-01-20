import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const certifications = [
    {
      title: 'React.js Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'Sep 2025',
      link: 'https://verify.letsupgrade.in/certificate/LUERJSSEPT125443',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '⚛️',
    },
    {
      title: 'MongoDB Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'Jun 2024',
      link: 'https://verify.letsupgrade.in/certificate/LUEMDBSEP124152',
      gradient: 'from-green-500 to-emerald-500',
      icon: '🍃',
    },
    {
      title: 'Introduction to API and RESTful API',
      issuer: 'Great Learning',
      date: 'Mar 2024',
      link: 'https://www.mygreatlearning.com/certificate/XBOWLCKK',
      gradient: 'from-orange-500 to-amber-500',
      icon: '🔌',
    },
    {
      title: 'Basics of Generative AI',
      issuer: 'Open Weaver Studio',
      date: 'Jan 2024',
      link: 'https://kandi.verified.cv/en/verify/54097392824556',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🤖',
    },
  ];

  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[hsl(320,90%,55%)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Award className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuous learning and professional development milestones
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative glass rounded-2xl border border-border/50 p-6 card-hover overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Corner decoration */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${cert.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} p-[1px] flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  
                  <p className={`text-sm font-mono bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-2`}>
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>
              </div>

              {/* Verify badge */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  <Sparkles className="h-3 w-3" />
                  Click to verify credential
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Achievements Section */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-wider flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            NOTABLE ACHIEVEMENTS
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: '3rd Semester Topper', desc: 'Academic Excellence', icon: '🏆', gradient: 'from-amber-500 to-orange-500' },
              { title: 'SIH 2024 Team Leader', desc: 'Smart India Hackathon', icon: '👨‍💻', gradient: 'from-blue-500 to-indigo-500' },
              { title: '8.85 CGPA', desc: 'BCA in Software Engineering', icon: '📚', gradient: 'from-green-500 to-emerald-500' },
            ].map((achievement, index) => (
              <div
                key={achievement.title}
                className={`group relative p-5 rounded-xl glass border border-border/50 text-center card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${achievement.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-xl">{achievement.icon}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;