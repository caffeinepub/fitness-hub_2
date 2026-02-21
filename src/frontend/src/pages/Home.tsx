import { Clock, Dumbbell, Users, Award, PartyPopper, Trophy, Star, Target, Heart, Zap, Shield, User } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/generated/86b32a34-8ef3-4143-8e81-c566b3678f98.png)',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40 z-10" />
        
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

      {/* Meet the Manager Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Meet the <span className="text-accent-brand">Manager</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Leadership dedicated to your fitness success
            </p>
          </div>

          <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-accent-brand/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-brand to-accent-secondary rounded-2xl transform -rotate-3"></div>
                  <img
                    src="/assets/556973191_25294936933424537_2300403285239686172_n.jpg"
                    alt="Allen D. - Manager"
                    className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-background"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="mb-4">
                  <Badge className="mb-2 px-3 py-1 bg-gradient-to-r from-accent-brand to-accent-secondary text-white border-0">
                    <User className="h-4 w-4 mr-1" />
                    Manager
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">
                    Allen D.
                  </h3>
                </div>
                
                <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                  <p>
                    With years of experience in the fitness industry, I am proud to serve as the Manager of BodyShape Fitness, where we have earned our reputation as the number one gym in Independence, KY. Our commitment to excellence is reflected in our state-of-the-art equipment and top-tier facilities, which set us apart from the competition.
                  </p>
                  <p>
                    At BodyShape Fitness, we prioritize our members' wellness and success, providing a supportive community that empowers individuals at every fitness level. Join us today and discover why we're the go-to destination for fitness enthusiasts in the area!
                  </p>
                </div>
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
                  Our proven approach combines quality equipment, flexible access, and a supportive environment to help you reach your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border hover:border-accent-brand/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent-brand/10 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h3 className="font-bold text-lg">Clean & Safe</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Well-maintained facility with regular cleaning and equipment maintenance. Your safety and comfort are our priorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 20th Anniversary Celebration Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-accent-brand/10 via-accent-secondary/10 to-accent-brand/5 rounded-3xl p-8 md:p-12 border-2 border-accent-brand/30 shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <PartyPopper className="h-12 w-12 text-accent-brand" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Celebrating <span className="text-accent-brand">20 Years</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Since 2005, Bodyshape Fitness has been Independence's trusted fitness destination. Thank you for two decades of support!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-accent-brand mb-2">20</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-accent-brand mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always Open</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-accent-brand mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-accent-brand mb-2">#1</div>
                <div className="text-sm text-muted-foreground">In Northern KY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
            World-Class <span className="text-accent-brand">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-4 rounded-2xl inline-block mb-4">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free Weights</h3>
              <p className="text-sm text-muted-foreground">
                Complete selection of dumbbells, barbells, and plates
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-4 rounded-2xl inline-block mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cardio Equipment</h3>
              <p className="text-sm text-muted-foreground">
                Treadmills, bikes, ellipticals, and rowing machines
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-4 rounded-2xl inline-block mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Strength Machines</h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art resistance and plate-loaded machines
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-4 rounded-2xl inline-block mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Functional Training</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated space for functional fitness and boxing
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-accent-brand to-accent-secondary py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">20+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">1000+</div>
              <div className="text-sm md:text-base opacity-90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Access Hours</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Satisfaction</div>
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

      {/* Testimonials */}
      <section className="container mx-auto px-4 mb-20">
        <TestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-accent-brand to-accent-secondary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join Independence's #1 gym and start your fitness journey today. 20 years of excellence, 24/7 access, and a community that supports your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-accent-brand font-bold text-lg rounded-xl hover:bg-white/90 transition-colors shadow-xl">
              Join Now
            </button>
            <a
              href="tel:363-8900"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-colors border-2 border-white/30 inline-block"
            >
              Call (363) 8900
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
