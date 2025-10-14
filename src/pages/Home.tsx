import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-empanadas.jpg";
import marketScene from "@/assets/market-scene.jpg";
import { MapPin, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-lg">
            Handcrafted Empanadas
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium drop-shadow-md">
            Bay Area Pop-Up & Markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              <Link to="/menu">See Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Handcrafted Daily</h3>
              <p className="text-muted-foreground">
                Made fresh with authentic recipes and premium ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Local Markets</h3>
              <p className="text-muted-foreground">
                Find us at Bay Area farmers markets every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Catering Available</h3>
              <p className="text-muted-foreground">
                Perfect for events, parties, and corporate gatherings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={marketScene}
                alt="CTK Empanadas at farmers market"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Authentic Latin Flavors
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by Cristian & Tatiana, CTK Empanadas brings authentic Latin flavors
                to the Bay Area. Every empanada is handcrafted with love, using traditional
                recipes passed down through generations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're proud to serve our community at local farmers markets and through
                delivery, bringing the taste of home to every bite.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Experience CTK?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Order for delivery or visit us at your local farmers market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Uber Eats
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/locations">Find Our Markets</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
