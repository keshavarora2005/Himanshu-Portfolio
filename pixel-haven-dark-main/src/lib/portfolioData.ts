import holiImage from '@/assets/portfolio-holi.jpg';
import esportsImage from '@/assets/portfolio-esports.jpg';
import magazineImage from '@/assets/portfolio-magazine.jpg';
import kashiImage from '@/assets/portfolio-kashi.jpg';
import modelImage from '@/assets/portfolio-model.jpg';
import streetImage from '@/assets/portfolio-street.jpg';
import randomImage from '@/assets/portfolio-random.jpg';

export const portfolioCategories = [
  {
    id: 'masaan-holi',
    title: 'Masaan Holi',
    description: 'Capturing the spiritual essence and vibrant colors of Holi celebration in Varanasi',
    image: holiImage,
    tags: ['Festival', 'Colors', 'Spirituality', 'Varanasi'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  {
    id: 'esports',
    title: 'Esports',
    description: 'Professional gaming competitions and the intensity of competitive esports',
    image: esportsImage,
    tags: ['Gaming', 'Competition', 'Events', 'Action'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  {
    id: 'magazine',
    title: 'Editorial Shoot',
    description: 'Editorial photography and fashion shoots for various publications',
    image: magazineImage,
    tags: ['Editorial', 'Fashion', 'Magazine', 'Professional'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  {
    id: "kashi",
    title: "Kashi (Varanasi)",
    description: "Cultural and spiritual documentation of the ancient city of Varanasi",
    tags: ["Culture", "Heritage", "Spirituality", "Architecture"],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  
  {
    id: 'model-shoot',
    title: 'Model Shoot',
    description: 'Professional model photography and portrait sessions',
    image: modelImage,
    tags: ['Portrait', 'Beauty', 'Fashion', 'Studio'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  {
    id: 'street',
    title: 'Street Photography',
    description: 'Candid moments and urban life captured in natural settings',
    image: streetImage,
    tags: ['Street', 'Documentary', 'Urban', 'Candid'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
  {
    id: 'random',
    title: 'Random Shots',
    description: 'Experimental and creative photography exploring artistic vision',
    image: randomImage,
    tags: ['Creative', 'Experimental', 'Abstract', 'Art'],
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"] // filenames only
  },
]; 