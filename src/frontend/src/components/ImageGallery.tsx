import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const images = [
  {
    src: '/assets/517620380_1306336444832099_8194069313658765999_n.jpg',
    alt: 'Cardio Equipment Area',
    title: 'Cardio Zone',
    description: 'Modern cardio equipment with entertainment systems',
  },
  {
    src: '/assets/516865380_1306336354832108_3912420931968401456_n.jpg',
    alt: 'Weight Training Floor',
    title: 'Weight Training',
    description: 'Comprehensive free weight and machine area',
  },
  {
    src: '/assets/516502719_1306343131498097_2361034153104414808_n.jpg',
    alt: 'Facility Exterior',
    title: 'Our Location',
    description: 'Bodyshape Fitness Center entrance and parking',
  },
  {
    src: '/assets/516245078_1306336264832117_2368290094586174251_n.jpg',
    alt: 'Free Weights Section',
    title: 'Free Weights',
    description: 'Complete free weight training area',
  },
  {
    src: '/assets/518270242_1306336364832107_8264580889139094172_n.jpg',
    alt: 'Strength Training Equipment',
    title: 'Strength Training',
    description: 'Professional-grade strength equipment',
  },
  {
    src: '/assets/517940772_1306336431498767_8407149108597182872_n.jpg',
    alt: 'Main Training Floor',
    title: 'Training Floor',
    description: 'Spacious main floor with diverse equipment',
  },
  {
    src: '/assets/348s (1).jpg',
    alt: 'Free Weight Area',
    title: 'Free Weights',
    description: 'Complete free weight and functional training area',
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
