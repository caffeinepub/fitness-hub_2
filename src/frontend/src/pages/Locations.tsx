import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import LocationCard from '../components/LocationCard';

export default function Locations() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-accent-brand to-accent-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            Our Location
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Visit Bodyshape Fitness in Independence, Kentucky
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <LocationCard
            name="Bodyshape Fitness - Independence"
            address="6424 Taylor Mill Road, Independence, KY"
            phone="363-8900"
            hours="24/7 Gym Access"
          />
          
          {/* Google Maps Embed */}
          <div className="mt-8 bg-card rounded-3xl overflow-hidden border-2 border-border shadow-xl">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.8!2d-84.5!3d39.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAwJzAwLjAiTiA4NMKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bodyshape Fitness Location"
              />
            </div>
          </div>
          
          <div className="mt-8 bg-card rounded-3xl p-8 border-2 border-border shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:363-8900" className="text-muted-foreground hover:text-accent-brand transition-colors">
                    363-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:bodyshapefitness@gmail.com" className="text-muted-foreground hover:text-accent-brand transition-colors">
                    bodyshapefitness@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    6424 Taylor Mill Road<br />
                    Independence, Kentucky
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    24/7 Gym Access
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground mb-6">
                Ready to start your fitness journey? Contact us today!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:363-8900"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-brand to-accent-secondary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Call 363-8900
                </a>
                <a
                  href="mailto:bodyshapefitness@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-bold rounded-xl hover:bg-accent/10 transition-colors border-2 border-border"
                >
                  Send Email
                </a>
                <a
                  href="https://bodyshapegym.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-bold rounded-xl hover:bg-accent/10 transition-colors border-2 border-border"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
