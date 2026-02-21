import { Clock, Dumbbell, Users, Award, PartyPopper } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src="/assets/348s (2).jpg"
          alt="Bodyshape Fitness Gym"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            {/* 20th Anniversary Badge */}
            <Badge className="mb-4 px-4 py-2 text-base bg-gradient-to-r from-accent-brand to-accent-secondary text-white border-0 shadow-xl">
              <PartyPopper className="h-5 w-5 mr-2" />
              Celebrating 20 Years of Excellence!
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-brand to-accent-secondary">
                Bodyshape Fitness
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium">
              Independence, Kentucky's premier 24/7 fitness facility. Transform your body, transform your life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-brand to-accent-secondary text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-accent-brand/30">
                Get Started
              </button>
              <a
                href="tel:363-8900"
                className="px-8 py-4 bg-background/80 backdrop-blur text-foreground font-bold text-lg rounded-xl hover:bg-background transition-colors border-2 border-border inline-block"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/95 backdrop-blur border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl hover:shadow-accent-brand/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium strength training and cardio machines
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl hover:shadow-accent-brand/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Work out on your schedule, any time of day
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl hover:shadow-accent-brand/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">20 Years Strong</h3>
                  <p className="text-sm text-muted-foreground">
                    Two decades serving Independence, Kentucky
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 20th Anniversary Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-accent-brand via-accent-secondary to-accent-brand rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <PartyPopper className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            Celebrating 20 Years!
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            For two decades, Bodyshape Fitness has been Independence, Kentucky's trusted fitness destination. 
            Thank you for making us part of your fitness journey. Here's to 20 more years of helping our community achieve their goals!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Welcome to <span className="text-accent-brand">Bodyshape Fitness</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-border shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Welcome to Bodyshape Fitness, Independence, Kentucky's premier 24/7 fitness facility. For 20 years, we've been dedicated to helping our community achieve their fitness goals in a welcoming, well-equipped environment.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Our facility features modern, high-quality equipment including premium strength training machines, a full range of cardio equipment, and functional training areas. Whether you're looking to lose weight, build muscle, or improve your overall health, Bodyshape Fitness provides the tools and environment you need to succeed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background/50 rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-xl mb-3 text-accent-brand">Our Facility</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Premium Strength Training Equipment</li>
                    <li>• Full Cardio Machine Selection</li>
                    <li>• Functional Training Areas</li>
                    <li>• Free Weights & Plate-Loaded Machines</li>
                    <li>• Clean, Well-Maintained Facility</li>
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-xl mb-3 text-accent-brand">Why Choose Us</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• 20 Years Serving Independence, KY</li>
                    <li>• 24/7 Gym Access</li>
                    <li>• Modern, Quality Equipment</li>
                    <li>• Lower Level Location</li>
                    <li>• Welcoming Community</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="tel:363-8900"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-brand to-accent-secondary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Call 363-8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-accent-brand to-accent-secondary py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">20</div>
              <div className="text-sm md:text-base font-medium opacity-90">Years Strong</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">24/7</div>
              <div className="text-sm md:text-base font-medium opacity-90">Access</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">Modern</div>
              <div className="text-sm md:text-base font-medium opacity-90">Equipment</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">100%</div>
              <div className="text-sm md:text-base font-medium opacity-90">Dedicated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
            Our <span className="text-accent-brand">Facility</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look inside Bodyshape Fitness - Independence, Kentucky
          </p>
        </div>
        <ImageGallery />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-12 md:p-16 text-center border-2 border-border shadow-xl">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6">
            Ready to Start Your <span className="text-accent-brand">Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Bodyshape Fitness today and experience Independence's premier 24/7 fitness facility!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-accent-brand to-accent-secondary text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-accent-brand/30">
              Join Now
            </button>
            <a
              href="tel:363-8900"
              className="px-8 py-4 bg-background text-foreground font-bold text-lg rounded-xl hover:bg-accent/10 transition-colors border-2 border-border inline-block"
            >
              Call 363-8900
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
