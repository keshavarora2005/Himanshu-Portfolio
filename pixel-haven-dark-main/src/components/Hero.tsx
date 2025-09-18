import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-photographer.jpg';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroImage;
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-hero transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <img
            src={heroImage}
            alt="Professional Photographer"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.4) contrast(1.1)' }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-overlay" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="hero-text font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block text-gradient">Himanshu Singh</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-foreground-secondary mt-2">
              Professional Photographer
            </span>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Capturing life's most precious moments through the lens of creativity and passion. 
            From vibrant festivals to intimate portraits, every frame tells a story.
          </p>
          
          <div className="hero-cta space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              View Portfolio
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
              onClick={scrollToPortfolio}
              className="btn-ghost"
            >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Loading Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-hero flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default Hero;