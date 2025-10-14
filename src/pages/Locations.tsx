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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Find Us at Local Markets
          </h1>
          <p className="text-xl text-muted-foreground">
            Visit us at Bay Area farmers markets for the freshest empanadas
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {markets.map((market) => (
            <div
              key={market.name}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
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

        {/* Map Placeholder */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-muted/30 rounded-2xl p-8 text-center border border-border">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2">
              Interactive Map
            </h3>
            <p className="text-muted-foreground">
              Coming soon: Interactive map showing all our market locations
            </p>
          </div>
        </div>

        {/* Delivery CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-12 max-w-4xl mx-auto border border-primary/20">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Can't Make It to the Market?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Order delivery through Uber Eats, DoorDash, or Postmates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Delivery
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/catering">Book Catering</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
