import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-empanadas.jpg";
import marketScene from "@/assets/market-scene.jpg";
import { MapPin, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-grain">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-blur-in float-particles">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-lg animate-bounce-in text-glow">
            Handcrafted Empanadas
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium drop-shadow-md animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Bay Area Pop-Up & Markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" asChild className="hover-lift hover-shine click-bounce">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground transition-all duration-300 hover-glow click-ripple">
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
            <div className="text-center animate-scale-in-center hover-lift hover-tilt" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-scale hover-rotate">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 gradient-text-animated">Handcrafted Daily</h3>
              <p className="text-muted-foreground">
                Made fresh with authentic recipes and premium ingredients
              </p>
            </div>
            <div className="text-center animate-scale-in-center hover-lift hover-tilt" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-scale hover-rotate" style={{ animationDelay: "0.5s" }}>
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 gradient-text-animated">Local Markets</h3>
              <p className="text-muted-foreground">
                Find us at Bay Area farmers markets every week
              </p>
            </div>
            <div className="text-center animate-scale-in-center hover-lift hover-tilt" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-scale hover-rotate" style={{ animationDelay: "1s" }}>
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 gradient-text-animated">Catering Available</h3>
              <p className="text-muted-foreground">
                Perfect for events, parties, and corporate gatherings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in-left hover-scale">
              <img
                src={marketScene}
                alt="CTK Empanadas at farmers market"
                className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(181,72,43,0.4)]"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-heading font-bold mb-6 gradient-text">
                Authentic Latin Flavors
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Founded by Cristian & Tatiana, CTK Empanadas brings authentic Latin flavors
                to the Bay Area. Every empanada is handcrafted with love, using traditional
                recipes passed down through generations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
                We're proud to serve our community at local farmers markets and through
                delivery, bringing the taste of home to every bite.
              </p>
              <Button size="lg" variant="secondary" asChild className="hover-lift animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/about">Our Story</Link>
              </Button>
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
          <h2 className="text-4xl font-heading font-bold mb-6 animate-fade-in">
            Ready to Experience CTK?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Order for delivery or visit us at your local farmers market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" variant="secondary" asChild className="hover-lift">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Uber Eats
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover-lift">
              <Link to="/locations">Find Our Markets</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
