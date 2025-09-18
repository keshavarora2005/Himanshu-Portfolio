import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Camera } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-xl lg:text-2xl">
                Himanshu Singh
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-foreground-secondary hover:text-primary font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/sonyalpha.wala?igsh=MTY3YmlkNTJzcmNs"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block text-foreground-secondary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-foreground-secondary hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        
        <div className={`absolute right-0 top-0 h-full w-80 bg-card border-l border-border transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-6 border-t border-border">
                <a
                  href="https://www.instagram.com/sonyalpha.wala?igsh=MTY3YmlkNTJzcmNs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;