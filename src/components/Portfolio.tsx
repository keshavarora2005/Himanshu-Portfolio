import { useState, useEffect, useRef } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 import navigate
import holiImage from "@/assets/portfolio-holi.jpg";
import esportsImage from "@/assets/portfolio-esports.jpg";
import magazineImage from "@/assets/portfolio-magazine.jpg";
import kashiImage from "@/assets/portfolio-kashi.jpg";
import modelImage from "@/assets/portfolio-model.jpg";
import streetImage from "@/assets/portfolio-street.jpg";
import randomImage from "@/assets/portfolio-random.jpg";

const portfolioCategories = [
  {
    id: "masaan-holi",
    title: "Masaan Holi",
    description:
      "Capturing the spiritual essence and vibrant colors of Holi celebration in Varanasi",
    image: holiImage,
    tags: ["Festival", "Colors", "Spirituality", "Varanasi"],
  },
  {
    id: "esports",
    title: "Esports",
    description:
      "Professional gaming competitions and the intensity of competitive esports",
    image: esportsImage,
    tags: ["Gaming", "Competition", "Events", "Action"],
  },
  {
    id: "magazine",
    title: "Editorial Shoot",
    description: "Editorial photography and fashion shoots for various publications",
    image: magazineImage,
    tags: ["Editorial", "Fashion", "Magazine", "Professional"],
  },
  {
    id: "kashi",
    title: "Kashi (Varanasi)",
    description: "Cultural and spiritual documentation of the ancient city of Varanasi",
    image: kashiImage,
    tags: ["Culture", "Heritage", "Spirituality", "Architecture"],
  },
  {
    id: "model-shoot",
    title: "Model Shoot",
    description: "Professional model photography and portrait sessions",
    image: modelImage,
    tags: ["Portrait", "Beauty", "Fashion", "Studio"],
  },
  {
    id: "street",
    title: "Street Photography",
    description: "Candid moments and urban life captured in natural settings",
    image: streetImage,
    tags: ["Street", "Documentary", "Urban", "Candid"],
  },
  {
    id: "random",
    title: "Random Shots",
    description: "Experimental and creative photography exploring artistic vision",
    image: randomImage,
    tags: ["Creative", "Experimental", "Abstract", "Art"],
  },
];

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate(); // 👈 navigation hook

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".portfolio-item");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-gradient">
            Portfolio
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Explore my diverse collection of photography across different genres
            and styles. Each category represents a unique perspective and artistic
            vision.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.id}
              data-index={index}
              className={`portfolio-item scroll-reveal ${
                visibleItems.has(index) ? "revealed" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="portfolio-card group cursor-pointer">
                <div className="gallery-item relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-80 object-cover"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="text-center space-y-4">
                      <h3 className="font-heading font-bold text-2xl text-white">
                        {category.title}
                      </h3>
                      <p className="text-white/90 px-4 text-sm">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center px-4">
                        {category.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4 justify-center pt-2">
                        <button
                          onClick={() => navigate(`/gallery/${category.id}`)} // 👈 redirect to gallery
                          className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Gallery</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-foreground-secondary mb-6">
            Want to see more of my work or discuss a photography project?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
