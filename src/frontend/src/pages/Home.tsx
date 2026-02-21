import { Clock, Dumbbell, Users, Award, PartyPopper, Trophy, Star, Target, Heart, Zap, Shield } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import TestimonialsSection from '../components/TestimonialsSection';
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

      {/* Gym Description Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-accent-brand/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-brand to-accent-secondary rounded-2xl transform rotate-3"></div>
                  <img
                    src="/assets/generated/owner-photo.dim_400x400.png"
                    alt="Bodyshape Fitness Owner"
                    className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-background"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-display font-black mb-6">
                  Your <span className="text-accent-brand">Fitness Destination</span>
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  At Bodyshape Fitness, we've created Independence, Kentucky's most complete fitness facility. Our gym features state-of-the-art equipment including premium strength training machines, a comprehensive cardio selection, free weights, and dedicated functional training areas.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  With true 24/7 access, you can work out on your schedule. Whether you're an early morning warrior or a late-night lifter, our clean, well-maintained facility is always ready for you. Experience the difference that 20 years of dedication to our community makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 mb-20">
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

      {/* #1 Gym in Northern Kentucky Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-accent-brand/20 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Trophy className="h-10 w-10 text-accent-brand" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Northern Kentucky's <span className="text-accent-brand">#1 Gym</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For 20 years, Bodyshape Fitness has been the trusted choice for fitness enthusiasts across northern Kentucky. Here's why we're the best:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">20 Years of Excellence</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Two decades of proven results and community trust. We've helped thousands of members achieve their fitness goals since 2005.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Dumbbell className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">Premium Equipment</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State-of-the-art strength training machines, full cardio selection, free weights, and functional training areas. Everything you need under one roof.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">True 24/7 Access</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Work out whenever it fits your schedule. Early morning, late night, or anytime in between - we're always open for you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">Community Focused</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Locally owned and operated in Independence, KY. We're invested in our community's health and wellness, not corporate profits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">Results-Driven</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our members see real results. From weight loss to muscle gain to improved health markers - we help you achieve your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-accent-brand fill-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">5-Star Rated by Members</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our members love us! Consistently rated 5 stars for our exceptional service, clean facility, and welcoming atmosphere.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-accent-brand to-accent-secondary rounded-2xl p-8 text-center text-white">
            <Zap className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-display font-black mb-3">
              Experience the Difference
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join the gym that northern Kentucky trusts. With unmatched equipment, unbeatable hours, and a proven track record of success, Bodyshape Fitness is where your fitness journey begins.
            </p>
            <a
              href="tel:363-8900"
              className="inline-block px-8 py-4 bg-white text-accent-brand font-bold text-lg rounded-xl hover:bg-white/90 transition-colors shadow-xl"
            >
              Call 363-8900 Today
            </a>
          </div>
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
                  <h3 className="font-bold text-xl mb-3 text-accent-brand">Member Benefits</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• True 24/7 Access</li>
                    <li>• No Long-Term Contracts</li>
                    <li>• Friendly, Supportive Environment</li>
                    <li>• Locally Owned & Operated</li>
                    <li>• 20 Years of Proven Results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-accent-brand via-accent-secondary to-accent-brand rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12" />
              </div>
              <div className="text-5xl font-display font-black mb-2">1000+</div>
              <div className="text-xl opacity-90">Happy Members</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12" />
              </div>
              <div className="text-5xl font-display font-black mb-2">20</div>
              <div className="text-xl opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <div className="text-5xl font-display font-black mb-2">24/7</div>
              <div className="text-xl opacity-90">Always Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
            Tour Our <span className="text-accent-brand">Facility</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what makes Bodyshape Fitness special
          </p>
        </div>
        <ImageGallery />
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-12 md:p-16 text-center border-2 border-accent-brand/20 shadow-2xl">
          <Shield className="h-16 w-16 mx-auto mb-6 text-accent-brand" />
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
            Ready to Start Your <span className="text-accent-brand">Fitness Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Independence, Kentucky's premier fitness facility today. No long-term contracts, just results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:363-8900"
              className="px-8 py-4 bg-gradient-to-r from-accent-brand to-accent-secondary text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-accent-brand/30 inline-block"
            >
              Call 363-8900
            </a>
            <button className="px-8 py-4 bg-background border-2 border-border text-foreground font-bold text-lg rounded-xl hover:bg-accent-brand/5 transition-colors">
              Visit Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
