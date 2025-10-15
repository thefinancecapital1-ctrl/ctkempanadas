import chefCristian from "@/assets/chef-cristian.jpg";
import { Flame, Star, Zap, Award, Trophy, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chef = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-background-pan" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-16 animate-blur-in">
          <div className="flex justify-center gap-4 mb-6 animate-bounce-in">
            <Flame className="w-12 h-12 text-secondary animate-pulse-scale" />
            <Crown className="w-12 h-12 text-primary animate-pulse-scale" style={{ animationDelay: "0.2s" }} />
            <Flame className="w-12 h-12 text-secondary animate-pulse-scale" style={{ animationDelay: "0.4s" }} />
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-black mb-6 animate-wiggle">
            <span className="gradient-text-animated text-glow">CHEF CRISTIAN</span>
          </h1>
          <div className="flex justify-center gap-3 mb-4 animate-fade-in-up">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 text-secondary fill-secondary animate-pulse-scale"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <p className="text-2xl font-heading font-bold text-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            🔥 LEVEL 99 CULINARY LEGEND 🔥
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
          {/* Image Section with Epic Hover Effects */}
          <div className="relative group animate-roll-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-75 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-500 animate-gradient-shift" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={chefCristian}
                alt="Chef Cristian Torres"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 border-4 border-primary/30"
              />
              <div className="absolute -top-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center font-heading font-black text-2xl shadow-2xl animate-float border-4 border-white">
                <Trophy className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Bio Section with Gaming Style */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary to-primary/70 rounded-xl p-4 text-center hover-lift hover-glow click-bounce animate-bounce-in">
                <Zap className="w-8 h-8 mx-auto mb-2 text-white animate-pulse-scale" />
                <div className="text-2xl font-heading font-black text-white">16+</div>
                <div className="text-xs text-white/90 font-semibold">Years XP</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-xl p-4 text-center hover-lift hover-glow click-bounce animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                <Award className="w-8 h-8 mx-auto mb-2 text-white animate-pulse-scale" />
                <div className="text-2xl font-heading font-black text-white">100K+</div>
                <div className="text-xs text-white/90 font-semibold">Empanadas</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-4 text-center hover-lift hover-glow click-bounce animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                <Star className="w-8 h-8 mx-auto mb-2 text-white animate-pulse-scale" />
                <div className="text-2xl font-heading font-black text-white">5⭐</div>
                <div className="text-xs text-white/90 font-semibold">Rating</div>
              </div>
            </div>

            {/* Story */}
            <div className="glass-effect rounded-2xl p-8 hover-lift card-shine">
              <h2 className="text-3xl font-heading font-black mb-6 gradient-text-animated flex items-center gap-3">
                <Flame className="w-8 h-8 animate-pulse-scale" />
                THE ORIGIN STORY
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="animate-fade-in">
                  Born with fire in his soul and flavor in his heart, <span className="text-primary font-bold">Chef Cristian Torres</span> unlocked his culinary powers at age 12. What started as curiosity turned into an unstoppable passion.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  In 2007, he leveled up by joining San Francisco's pro culinary scene, training under master chefs and mastering Peruvian techniques that would define his legendary status.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  From <span className="text-secondary font-bold">classic beef</span> to innovative <span className="text-secondary font-bold">vegetarian masterpieces</span>, every empanada is a boss-level achievement. Each crispy, golden pocket tells a story of Latin American culture through flavor.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gradient-animated rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-heading font-black mb-4 text-white flex items-center gap-3">
                <Zap className="w-7 h-7 animate-pulse-scale" />
                SIGNATURE SKILLS
              </h3>
              <ul className="space-y-3 text-white">
                {[
                  "Master of Traditional Peruvian Cuisine",
                  "Empanada Crafting Legend",
                  "Spice Blending Virtuoso",
                  "Cultural Storytelling Through Food",
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-slide-in-up hover-scale"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse-scale" />
                    <span className="font-semibold">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in-up">
              <Button size="lg" asChild className="hover-shine click-bounce hover-glow bg-gradient-to-r from-primary to-secondary text-white border-0">
                <a href="/menu">
                  TRY THE LEGENDARY EMPANADAS →
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl animate-scale-in-center">
          <blockquote className="text-3xl md:text-4xl font-heading font-black italic gradient-text-animated mb-6 animate-pulse-soft">
            "Food is my weapon. Flavor is my power. Every bite is an adventure."
          </blockquote>
          <p className="text-xl text-muted-foreground font-semibold">
            — Chef Cristian Torres, Culinary Legend
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
