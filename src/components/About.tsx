import { Camera, Award, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-photographer.jpg';

const About = () => {
  const stats = [
    { icon: Camera, label: 'Projects Completed', value: '30+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: MapPin, label: 'Cities Covered', value: '8+' },
    { icon: Clock, label: 'Happy Clients', value: '25+' },
  ];

  const skills = [
    'Portrait Photography',
    'Event Photography',
    'Street Photography',
    'Fashion Photography',
    'Cultural Documentation',
    'Post-Processing',
    'Adobe Lightroom',
    'Adobe Photoshop',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-gradient">
                About Me
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
              I'm Himanshu Singh, a passionate photographer from Varanasi with over 5+ years of dedicated experience in visual storytelling. My work spans diverse genres including commercial shoots, model photography, street photography, and wedding documentation, each allowing me to explore different facets of human emotion and artistic expression.
              </p>
              
              <p className="text-foreground-secondary leading-relaxed mb-6">
              My photography has gained recognition across prestigious platforms including IndiaToday.com, NDTV.com, Cambridge.org, Dictionary.com, PCMag.com, Wikipedia.org, and MSN.com. This exposure has helped me connect with diverse audiences while showcasing my versatility behind the lens.
              </p>

              <p className="text-foreground-secondary leading-relaxed">
              What drives me is the belief that every frame should tell a compelling story. Whether capturing intimate wedding moments, dynamic commercial campaigns, or candid street life in Varanasi, I focus on preserving authentic emotions and creating timeless memories. I'm always excited to collaborate with clients who value professional photography that goes beyond mere documentation.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-heading font-semibold text-xl mb-4">Expertise & Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-card rounded-lg text-sm text-foreground-secondary border border-border"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Image & Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="portfolio-card overflow-hidden">
                <img
                  src={heroImage}
                  alt="Himanshu Singh - Professional Photographer"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-lg border border-border text-center space-y-3"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto" />
                  <div>
                    <div className="font-heading font-bold text-2xl text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h3 className="font-heading font-semibold text-2xl mb-6">My Philosophy</h3>
          <blockquote className="text-lg text-foreground-secondary italic leading-relaxed">
            "Photography is not just about capturing what you see, but about revealing what 
            you feel. Every click of the shutter is an opportunity to freeze a moment in time, 
            to tell a story that words cannot express, and to create art that resonates with 
            the human experience."
          </blockquote>
          <div className="mt-4 text-primary font-medium">— Himanshu Singh</div>
        </div>
      </div>
    </section>
  );
};

export default About;