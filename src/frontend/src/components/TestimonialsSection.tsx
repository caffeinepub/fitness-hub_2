import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { reviews } from '../data/reviews';

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'fill-accent-brand text-accent-brand'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
          What Our <span className="text-accent-brand">Members Say</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied members who have transformed their lives at Bodyshape Fitness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="bg-card/95 backdrop-blur border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl hover:shadow-accent-brand/10"
          >
            <CardContent className="p-6">
              {renderStars(review.rating)}
              <p className="text-foreground/90 leading-relaxed mb-4 italic">
                "{review.reviewText}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{review.reviewerName}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-brand to-accent-secondary text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
          <Star className="h-6 w-6 fill-white" />
          <span>5-Star Rated by Our Members</span>
        </div>
      </div>
    </section>
  );
}
