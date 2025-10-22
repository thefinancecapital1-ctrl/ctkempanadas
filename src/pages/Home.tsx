import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-variety.jpg";
import { MapPin, Users, Heart, Calendar } from "lucide-react";
import { ShinyText } from "@/components/animations/ShinyText";
import { SplitText } from "@/components/animations/SplitText";
import { GlareHover } from "@/components/animations/GlareHover";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeContent } from "@/components/animations/FadeContent";
import { GradientText } from "@/components/animations/GradientText";
import { ScrollFloat } from "@/components/animations/ScrollFloat";
import { CountUp } from "@/components/animations/CountUp";
import { Aurora } from "@/components/animations/Aurora";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-grain">
        <Aurora />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ShinyText className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-lg">
            CTK Empanadas
          </ShinyText>
          <SplitText className="text-xl md:text-2xl text-white/95 mb-8 font-medium drop-shadow-md" delay={0.3}>
            Hand-crafted Peruvian Flavors
          </SplitText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlareHover>
              <Button size="lg" asChild>
                <a
                  href="https://www.ubereats.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Now
                </a>
              </Button>
            </GlareHover>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground transition-all duration-300">
              <Link to="/menu">See Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center animate-scale-in-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Handcrafted Daily</h3>
              <p className="text-muted-foreground">
                Made fresh with authentic recipes and premium ingredients
              </p>
            </div>
            <div className="text-center animate-scale-in-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Local Markets</h3>
              <p className="text-muted-foreground">
                Find us at Bay Area farmers markets every week
              </p>
            </div>
            <div className="text-center animate-scale-in-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Community Events</h3>
              <p className="text-muted-foreground">
                Perfect for events, parties, and corporate gatherings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              <GradientText>This Week at CTK</GradientText>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeContent delay={0}>
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">New Market Location</h3>
                <p className="text-muted-foreground mb-4">
                  Join us this Saturday at the Hayward Farmers Market! Fresh empanadas from 9am-1pm.
                </p>
                <span className="text-sm text-primary font-semibold">This Weekend</span>
              </div>
            </FadeContent>
            <FadeContent delay={0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Special Flavors</h3>
                <p className="text-muted-foreground mb-4">
                  Try our limited-edition seasonal empanadas - only available this month!
                </p>
                <span className="text-sm text-primary font-semibold">Limited Time</span>
              </div>
            </FadeContent>
            <FadeContent delay={0.3}>
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Community Milestone</h3>
                <p className="text-muted-foreground mb-4">
                  We've served over <CountUp to={500} suffix="+" className="font-bold text-primary" /> empanadas this week!
                </p>
                <span className="text-sm text-primary font-semibold">Thank You!</span>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
                <p className="text-muted-foreground text-lg font-medium">Image Coming Soon</p>
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  <GradientText>Our Story</GradientText>
                </h2>
              </ScrollReveal>
              <ScrollFloat delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded by Cristian & Tatiana, CTK Empanadas brings authentic Latin flavors
                  to the Bay Area. Every empanada is handcrafted with love, using traditional
                  recipes passed down through generations.
                </p>
              </ScrollFloat>
              <ScrollFloat delay={0.3}>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're proud to serve our community at local farmers markets and through
                  delivery, bringing the taste of home to every bite.
                </p>
              </ScrollFloat>
              <FadeContent delay={0.4}>
                <GlareHover>
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/about">Our Story</Link>
                  </Button>
                </GlareHover>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse-soft" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold mb-6 text-white">
              Ready to Experience CTK?
            </h2>
          </ScrollReveal>
          <FadeContent delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              We've served <CountUp to={500} suffix="+" className="font-bold" /> empanadas this week! Order for delivery or visit us at your local farmers market.
            </p>
          </FadeContent>
          <FadeContent delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlareHover>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://www.ubereats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on Uber Eats
                  </a>
                </Button>
              </GlareHover>
              <GlareHover>
                <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  <Link to="/locations">Find Our Markets</Link>
                </Button>
              </GlareHover>
            </div>
          </FadeContent>
        </div>
      </section>
    </div>
  );
};

export default Home;
