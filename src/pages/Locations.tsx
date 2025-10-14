import { MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MarketLocation {
  name: string;
  address: string;
  days: string;
  time: string;
}

const markets: MarketLocation[] = [
  {
    name: "Ferry Plaza Farmers Market",
    address: "1 Ferry Building, San Francisco, CA 94111",
    days: "Saturdays",
    time: "8:00 AM - 2:00 PM",
  },
  {
    name: "Palo Alto Farmers Market",
    address: "Gilman Street, Palo Alto, CA 94301",
    days: "Sundays",
    time: "9:00 AM - 1:00 PM",
  },
  {
    name: "Alameda Farmers Market",
    address: "2301 Alameda Ave, Alameda, CA 94501",
    days: "Tuesdays",
    time: "3:00 PM - 7:00 PM",
  },
  {
    name: "Berkeley Farmers Market",
    address: "Center Street & Martin Luther King Jr. Way, Berkeley, CA 94704",
    days: "Saturdays",
    time: "10:00 AM - 3:00 PM",
  },
];

const Locations = () => {
  return (
    <div className="min-h-screen py-20 bg-grain relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-blur-in">
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text-animated">
            Find Us at Local Markets
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Visit us at Bay Area farmers markets for the freshest empanadas
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {markets.map((market, index) => (
            <div
              key={market.name}
              className="bg-card rounded-2xl p-8 shadow-lg hover-glow hover-tilt border border-border animate-flip-in card-shine click-bounce"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                {market.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{market.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground font-medium">
                    {market.days}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{market.time}</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="mt-6 w-full hover-shine click-ripple"
                asChild
              >
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    market.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <div className="bg-muted/30 rounded-2xl p-8 text-center border border-border hover-lift float-particles">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-heading font-bold mb-2 gradient-text">
              Interactive Map
            </h3>
            <p className="text-muted-foreground">
              Coming soon: Interactive map showing all our market locations
            </p>
          </div>
        </div>

        {/* Delivery CTA */}
        <div className="text-center bg-gradient-animated rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 animate-scale-in-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white animate-bounce-in">
            Can't Make It to the Market?
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Order delivery through Uber Eats, DoorDash, or Postmates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="hover-shine click-bounce bg-white text-primary hover:bg-white/90">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Delivery
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-shine click-bounce border-white text-white hover:bg-white hover:text-primary">
              <Link to="/catering">Book Catering</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
