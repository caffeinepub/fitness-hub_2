import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const images = [
  {
    src: '/assets/generated/gallery-1-enhanced.dim_800x600.png',
    alt: 'Cardio Equipment Area',
    title: 'Cardio Zone',
    description: 'Modern cardio equipment with entertainment options',
  },
  {
    src: '/assets/348s (5).jpg',
    alt: 'Strength Training Area',
    title: 'Strength Training',
    description: 'Premium strength training equipment and free weights',
  },
  {
    src: '/assets/348s (6).jpg',
    alt: 'Red Rogue Equipment',
    title: 'Premium Equipment',
    description: 'High-quality Rogue strength training machines',
  },
  {
    src: '/assets/348s (7).jpg',
    alt: 'Plate-Loaded Machines',
    title: 'Plate-Loaded Area',
    description: 'Professional-grade plate-loaded equipment',
  },
  {
    src: '/assets/348s (1).jpg',
    alt: 'Free Weight Area',
    title: 'Free Weights',
    description: 'Complete free weight and functional training area',
  },
  {
    src: '/assets/348s (8).jpg',
    alt: 'Training Floor',
    title: 'Training Floor',
    description: 'Spacious training floor with variety of equipment',
  },
  {
    src: '/assets/348s (9).jpg',
    alt: 'Functional Training',
    title: 'Functional Training',
    description: 'Dedicated functional training and boxing area',
  },
  {
    src: '/assets/348s (4).jpg',
    alt: 'Leg Press Equipment',
    title: 'Leg Training',
    description: 'Heavy-duty leg press and lower body equipment',
  },
  {
    src: '/assets/348s.jpg',
    alt: 'Main Gym Floor',
    title: 'Main Floor',
    description: 'Open gym floor with diverse equipment selection',
  },
  {
    src: '/assets/348s (3).jpg',
    alt: 'Cardio and Strength',
    title: 'Mixed Training Area',
    description: 'Combined cardio and strength training space',
  },
  {
    src: '/assets/01bd025a3bc2b08a666581b45aee8af2c50810d227.jpg',
    alt: 'Equipment Detail',
    title: 'Quality Equipment',
    description: 'Close-up of our premium training equipment',
  },
  {
    src: '/assets/generated/gallery-fill.dim_800x600.png',
    alt: 'Gym Facility',
    title: 'Facility View',
    description: 'Our well-equipped training facility',
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
