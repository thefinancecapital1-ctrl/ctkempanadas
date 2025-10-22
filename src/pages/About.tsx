import { Heart, Award, Leaf } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeContent } from "@/components/animations/FadeContent";
import { GradientText } from "@/components/animations/GradientText";
import { ScrollFloat } from "@/components/animations/ScrollFloat";

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-grain relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl font-heading font-bold mb-6">
              <GradientText>Our Story</GradientText>
            </h1>
          </ScrollReveal>
          <FadeContent delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Bringing authentic Latin flavors to the Bay Area, one empanada at a time
            </p>
          </FadeContent>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <ScrollReveal>
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
              <p className="text-muted-foreground text-lg font-medium">Image Coming Soon</p>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Founded by Cristian & Tatiana
              </h2>
            </ScrollReveal>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <ScrollFloat delay={0.1}>
                <p>
                  CTK Empanadas began with a simple dream: to share the authentic flavors
                  of Latin America with our Bay Area community. Founded by Cristian and
                  Tatiana, our journey started in a small kitchen, crafting empanadas using
                  traditional family recipes passed down through generations.
                </p>
              </ScrollFloat>
              <ScrollFloat delay={0.2}>
                <p>
                  Every empanada we make is a labor of love. We source the finest local
                  ingredients from Bay Area farms and combine them with authentic spices
                  and techniques from our heritage. Our dough is made fresh daily, and
                  each empanada is carefully hand-crimped to ensure that perfect golden,
                  flaky crust.
                </p>
              </ScrollFloat>
              <ScrollFloat delay={0.3}>
                <p>
                  What started as a passion project has grown into a beloved presence at
                  farmers markets across the Bay Area. We're proud to be part of this
                  vibrant food community, bringing people together over delicious,
                  handcrafted empanadas.
                </p>
              </ScrollFloat>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <ScrollReveal>
          <div className="bg-muted/30 rounded-2xl p-12 max-w-6xl mx-auto mb-20 hover-lift">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              <GradientText>What We Stand For</GradientText>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <FadeContent delay={0.1}>
                <div className="text-center hover-tilt">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    <GradientText>Handcrafted Quality</GradientText>
                  </h3>
                  <p className="text-muted-foreground">
                    Every empanada is made by hand with attention to detail and authentic techniques
                  </p>
                </div>
              </FadeContent>
              <FadeContent delay={0.2}>
                <div className="text-center hover-tilt">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    <GradientText>Local Ingredients</GradientText>
                  </h3>
                  <p className="text-muted-foreground">
                    We partner with Bay Area farms to source the freshest, highest-quality ingredients
                  </p>
                </div>
              </FadeContent>
              <FadeContent delay={0.3}>
                <div className="text-center hover-tilt">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    <GradientText>Community First</GradientText>
                  </h3>
                  <p className="text-muted-foreground">
                    We're committed to serving our community and building lasting relationships
                  </p>
                </div>
              </FadeContent>
            </div>
          </div>
        </ScrollReveal>

        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up glass-effect p-10 rounded-3xl">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium italic text-foreground mb-6 gradient-text-animated animate-pulse-soft">
            "Food is more than sustenance - it's a way to share our culture, our
            heritage, and our love with others."
          </blockquote>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            — Cristian & Tatiana, Founders
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
