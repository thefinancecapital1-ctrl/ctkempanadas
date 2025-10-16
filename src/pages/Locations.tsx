import { MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MapPreview from "@/components/MapPreview";

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
    <div className="min-h-screen py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Find Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Visit us at Bay Area farmers markets for the freshest empanadas
          </p>
        </div>

        {/* Main Location */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Our Location</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">61 Rickenbacker Circle, Livermore, California 94551, United States</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-6 w-full"
              asChild
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=61+Rickenbacker+Circle+Livermore+CA+94551"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto mb-16">
          <MapPreview />
        </div>

        {/* Markets Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Find Us at Local Markets</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {markets.map((market, index) => (
              <div
                key={market.name}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover-lift"
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
                  className="mt-6 w-full"
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
        </div>

        {/* Delivery CTA */}
        <div className="text-center bg-primary text-white rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Can't Make It to the Market?
          </h2>
          <p className="text-lg mb-8">
            Order delivery through Uber Eats, DoorDash, or GrubHub
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Delivery
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
