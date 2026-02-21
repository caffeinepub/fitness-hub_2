import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const images = [
  {
    src: '/assets/enhanced_348s (7).jpg',
    alt: 'Premium Plate-Loaded Equipment',
    title: 'Plate-Loaded Machines',
    description: 'Professional-grade red Rogue plate-loaded equipment',
  },
  {
    src: '/assets/enhanced_348s.jpg',
    alt: 'Cardio and Training Area',
    title: 'Cardio Zone',
    description: 'Modern cardio equipment with vibrant orange accent walls',
  },
  {
    src: '/assets/enhanced_348s (8).jpg',
    alt: 'Main Training Floor',
    title: 'Training Floor',
    description: 'Spacious main floor with diverse strength equipment',
  },
  {
    src: '/assets/enhanced_517620380_1306336444832099_8194069313658765999_n.jpg',
    alt: 'Cardio Equipment Area',
    title: 'Cardio Equipment',
    description: 'State-of-the-art cardio machines and training area',
  },
  {
    src: '/assets/enhanced_517940772_1306336431498767_8407149108597182872_n.jpg',
    alt: 'Free Weight Training Area',
    title: 'Free Weights',
    description: 'Complete free weight and functional training area',
  },
  {
    src: '/assets/enhanced_518270242_1306336364832107_8264580889139094172_n.jpg',
    alt: 'Strength Training Floor',
    title: 'Strength Training',
    description: 'Professional strength training equipment and benches',
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-border hover:border-accent-brand/50 transition-all"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-white/80">{image.description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
