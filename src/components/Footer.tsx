import { Camera, Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Event Photography',
    'Portrait Sessions',
    'Fashion Shoots',
    'Cultural Documentation',
    'Corporate Events',
    'Product Photography',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-xl">
                Himanshu Singh
              </span>
            </div>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              Professional photographer capturing life's most beautiful moments. 
              Based in Varanasi, India, specializing in cultural photography, 
              events, and portraits.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sonyalpha.wala?igsh=MTY3YmlkNTJzcmNs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:himanshu.gu0349@gmail.com"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-foreground-secondary text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="text-foreground-secondary">
                <div className="font-medium text-foreground mb-1">Email</div>
                <a 
                  href="mailto:himanshu.gu0349@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  himanshu.gu0349@gmail.com
                </a>
              </div>
              

              
              <div className="text-foreground-secondary">
                <div className="font-medium text-foreground mb-1">Location</div>
                <div>Varanasi, Uttar Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground-secondary">
              © {currentYear} Himanshu Singh Photography. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-foreground-secondary">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for capturing memories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;