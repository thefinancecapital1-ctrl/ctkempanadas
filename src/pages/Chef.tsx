import chefCristian from "@/assets/chef-cristian.jpg";
import { Flame, Star, Zap, Award, Trophy, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chef = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Meet Chef Cristian Torres
          </h1>
          <p className="text-xl text-muted-foreground">
            Culinary Expert & Founder of CTK Empanadas
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Image Section */}
          <div className="relative">
            <img
              src={chefCristian}
              alt="Chef Cristian Torres"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto h-auto"
            />
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-xl font-heading font-bold">16+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <Zap className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-xl font-heading font-bold">100K+</div>
                <div className="text-xs text-muted-foreground">Empanadas Crafted</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-xl font-heading font-bold">5⭐</div>
                <div className="text-xs text-muted-foreground">Customer Rating</div>
              </div>
            </div>

            {/* Story */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chef Cristian Torres discovered his passion for cooking at age 12, transforming a childhood curiosity into a lifelong culinary journey.
                </p>
                <p>
                  In 2007, he refined his craft in San Francisco's professional kitchens, training under experienced chefs and mastering traditional Peruvian cooking techniques.
                </p>
                <p>
                  Today, Chef Cristian brings authentic Latin American flavors to the Bay Area through CTK Empanadas, crafting each empanada with care and traditional methods passed down through generations.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Expertise</h3>
              <ul className="space-y-2">
                {[
                  "Traditional Peruvian Cuisine",
                  "Artisan Empanada Crafting",
                  "Authentic Spice Blending",
                  "Cultural Culinary Heritage",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" asChild>
                <a href="/menu">View Our Menu</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center bg-muted/30 p-8 rounded-xl">
          <blockquote className="text-2xl font-heading font-semibold italic mb-4">
            "Every empanada tells a story of Latin American culture and tradition."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            — Chef Cristian Torres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
