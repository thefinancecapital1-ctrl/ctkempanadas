import { Button } from "@/components/ui/button";
import beefEmpanada from "@/assets/beef-empanada.jpg";
import chickenEmpanada from "@/assets/chicken-empanada.jpg";
import spinachEmpanada from "@/assets/spinach-empanada.jpg";
import dulceEmpanada from "@/assets/dulce-empanada.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: "savory" | "sweet";
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Beef",
    description: "Ground beef, onions, olives, and our signature spice blend",
    price: "$6.00",
    image: beefEmpanada,
    category: "savory",
  },
  {
    name: "Chicken",
    description: "Tender chicken, bell peppers, and fresh herbs",
    price: "$6.00",
    image: chickenEmpanada,
    category: "savory",
  },
  {
    name: "Spinach & Cheese",
    description: "Fresh spinach with creamy ricotta and mozzarella",
    price: "$5.50",
    image: spinachEmpanada,
    category: "savory",
  },
  {
    name: "Dulce de Leche",
    description: "Sweet caramel filling, dusted with powdered sugar",
    price: "$5.00",
    image: dulceEmpanada,
    category: "sweet",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen py-20 bg-grain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-blur-in">
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text-animated">Our Menu</h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            All empanadas are handcrafted fresh daily with premium ingredients
          </p>
        </div>

        {/* Savory Section */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-heading font-bold mb-8 text-center animate-fade-in gradient-text">
            Savory Empanadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems
              .filter((item) => item.category === "savory")
              .map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover-glow hover-tilt animate-bounce-in card-shine click-bounce"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-heading font-bold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary animate-pulse-scale">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sweet Section */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-heading font-bold mb-8 text-center animate-fade-in gradient-text">
            Sweet Empanadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems
              .filter((item) => item.category === "sweet")
              .map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover-glow hover-tilt animate-bounce-in card-shine click-bounce"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-heading font-bold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary animate-pulse-scale">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-animated p-12 rounded-3xl animate-scale-in-center float-particles">
          <h3 className="text-2xl font-heading font-bold mb-4 text-white animate-wiggle">
            Ready to Order?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get our handcrafted empanadas delivered right to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="hover-shine click-bounce hover-glow bg-white text-primary hover:bg-white/90">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Uber Eats
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-shine click-bounce border-white text-white hover:bg-white hover:text-primary">
              <a
                href="https://www.doordash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on DoorDash
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
