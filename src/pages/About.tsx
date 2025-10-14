import marketScene from "@/assets/market-scene.jpg";
import { Heart, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            Bringing authentic Latin flavors to the Bay Area, one empanada at a time
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="animate-fade-in-left hover-scale">
            <img
              src={marketScene}
              alt="CTK Empanadas at farmers market"
              className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(181,72,43,0.5)]"
            />
          </div>
          <div className="animate-fade-in-right">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Founded by Cristian & Tatiana
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                CTK Empanadas began with a simple dream: to share the authentic flavors
                of Latin America with our Bay Area community. Founded by Cristian and
                Tatiana, our journey started in a small kitchen, crafting empanadas using
                traditional family recipes passed down through generations.
              </p>
              <p>
                Every empanada we make is a labor of love. We source the finest local
                ingredients from Bay Area farms and combine them with authentic spices
                and techniques from our heritage. Our dough is made fresh daily, and
                each empanada is carefully hand-crimped to ensure that perfect golden,
                flaky crust.
              </p>
              <p>
                What started as a passion project has grown into a beloved presence at
                farmers markets across the Bay Area. We're proud to be part of this
                vibrant food community, bringing people together over delicious,
                handcrafted empanadas.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-muted/30 rounded-2xl p-12 max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Handcrafted Quality</h3>
              <p className="text-muted-foreground">
                Every empanada is made by hand with attention to detail and authentic techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Local Ingredients</h3>
              <p className="text-muted-foreground">
                We partner with Bay Area farms to source the freshest, highest-quality ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                We're committed to serving our community and building lasting relationships
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium italic text-foreground mb-6">
            "Food is more than sustenance - it's a way to share our culture, our
            heritage, and our love with others."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            — Cristian & Tatiana, Founders
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
