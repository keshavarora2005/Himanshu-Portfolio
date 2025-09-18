import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'himanshu.gu0349@gmail.com',
      href: 'mailto:himanshu.gu0349@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Varanasi, Uttar Pradesh, India',
      href: 'https://maps.google.com/?q=Varanasi,India',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-gradient">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground-secondary">
            I’d love to connect with you! Reach out via email or visit me in Varanasi.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col items-center">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group w-full max-w-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-medium text-foreground">{info.label}</div>
                <div className="text-foreground-secondary group-hover:text-primary transition-colors">
                  {info.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
