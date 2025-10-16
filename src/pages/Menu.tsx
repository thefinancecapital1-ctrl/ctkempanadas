import { Button } from "@/components/ui/button";
import empanadaVariety from "@/assets/hero-empanadas.jpg";
import hamCheese from "@/assets/ham-cheese-real.jpg";
import mushroom from "@/assets/mushroom-real.jpg";
import beefEmpanada from "@/assets/beef-empanada.jpg";
import chickenEmpanada from "@/assets/chicken-empanada.jpg";
import spinachEmpanada from "@/assets/spinach-empanada.jpg";
import dulceEmpanada from "@/assets/dulce-empanada.jpg";
import sweetPotatoEmpanada from "@/assets/sweet-potato-real.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: "savory" | "sweet" | "drink";
  spicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Beef",
    description: "Sautéed beef, seasoned to perfection with onions, garlic, and soy sauce, accompanied by crispy potatoes, all encased in a golden, flaky crust.",
    price: "$7.00",
    image: beefEmpanada,
    category: "savory",
  },
  {
    name: "Chicken",
    description: "Tender chicken, infused with the smoky kick of paprika, powdered chili, and cumin, creates a harmonious blend of spiciness and savory flavors.",
    price: "$7.00",
    image: chickenEmpanada,
    category: "savory",
  },
  {
    name: "Chicken Chorizo",
    description: "Infused with garlic, onions, and Aji Amarillo. Succulent chicken chorizo enhances the savory notes creating a delightful symphony of tastes.",
    price: "$7.00",
    image: empanadaVariety,
    category: "savory",
  },
  {
    name: "Pork",
    description: "Slow-cooked pulled pork lovingly enveloped in a delicate, flaky pastry shell, creating a symphony of textures with each bite.",
    price: "$7.00",
    image: beefEmpanada,
    category: "savory",
  },
  {
    name: "Ham and Cheese",
    description: "A lusciously creamy and cheesy filling, adorned with tantalizingly smoky bites of ham.",
    price: "$7.00",
    image: hamCheese,
    category: "savory",
  },
  {
    name: "Mushroom",
    description: "An exquisite blend of the robust, earthy notes of Portobello and Shiitake mushrooms, delivering a culinary delight that transcends ordinary expectations.",
    price: "$7.00",
    image: mushroom,
    category: "savory",
  },
  {
    name: "Sweet Corn and Mozzarella",
    description: "Succulent sweet corn kernels harmonize with the delicate essence of yellow squash, embraced by the gooey richness of mozzarella.",
    price: "$7.00",
    image: spinachEmpanada,
    category: "savory",
  },
  {
    name: "Potato",
    description: "Tender diced potatoes seasoned with garlic, bloomed onions, salt, pepper, smoky paprika, red chili flakes, and a unique mix of veggies.",
    price: "$7.00",
    image: beefEmpanada,
    category: "savory",
  },
  {
    name: "Sweet Potato",
    description: "A harmonious mixture of sweet potato, tender corn, hearty black beans, and aromatic spices including salt, garlic, pepper, and cumin. Complemented by Pepper Jack cheese.",
    price: "$7.00",
    image: sweetPotatoEmpanada,
    category: "savory",
  },
  {
    name: "Apple",
    description: "Tender, caramelized Honey Crisp apples infused with warm cinnamon spice. A heavenly combination of sweet and tart flavors.",
    price: "$7.00",
    image: dulceEmpanada,
    category: "sweet",
  },
  {
    name: "Pineapple",
    description: "Pineapple infused with a hint of cinnamon, brushed with egg wash, and delicately sprinkled with sanding sugar for an irresistible crunch.",
    price: "$7.00",
    image: dulceEmpanada,
    category: "sweet",
  },
  {
    name: "Arroz Con Leche Y Mazamorra Morada",
    description: "An innovative fusion that seamlessly blends the creamy comfort of traditional arroz con leche with the vibrant flavors of mazamorra morada.",
    price: "$7.00",
    image: dulceEmpanada,
    category: "sweet",
  },
  {
    name: "Chicha Morada",
    description: "Crafted from purple corn, simmered with pineapple, apple, cinnamon, and cloves. A traditional Peruvian drink that offers a symphony of flavors.",
    price: "$6.00",
    image: dulceEmpanada,
    category: "drink",
  },
];

const sauces = [
  {
    name: "Huacatay Sauce (Mild)",
    description: "Crafted with freshly chopped garlic, scallions, aji amarillo paste and huacatay paste for balanced heat and herbal notes. Creamy with mayonnaise.",
  },
  {
    name: "Rocoto Sauce (Extra Spicy)",
    description: "A bold kick of Rocoto Chile Pepper Paste, a hint of lime for citrusy freshness, and a touch of vinegar to tantalize your palate.",
    spicy: true,
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-muted-foreground">
            All empanadas are handcrafted fresh daily with premium ingredients
          </p>
        </div>

        {/* Peruvian Sauces */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Peruvian Sauces
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sauces.map((sauce, index) => (
              <div
                key={sauce.name}
                className="bg-card rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-heading font-bold mb-2 flex items-center gap-2">
                  {sauce.name}
                  {sauce.spicy && <span className="text-2xl">🔥</span>}
                </h3>
                <p className="text-muted-foreground">{sauce.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Savory Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Savory Empanadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems
              .filter((item) => item.category === "savory")
              .map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift transition-all"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-heading font-bold">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sweet Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Sweet Empanadas & Drinks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems
              .filter((item) => item.category === "sweet" || item.category === "drink")
              .map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift transition-all"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-heading font-bold">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sodas & San Pellegrino */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-heading font-bold mb-2">Sodas - $1.75</h3>
              <p className="text-muted-foreground">Coke, Diet Coke, Sprite, Root Beer, Dr. Pepper, Orange Sunkist</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-heading font-bold mb-2">San Pellegrino - $2.00</h3>
              <p className="text-muted-foreground">Premium sparkling water</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-primary p-12 rounded-3xl">
          <h3 className="text-2xl font-heading font-bold mb-4 text-white">
            Ready to Order?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Get our handcrafted empanadas delivered right to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">
                Order on Uber Eats
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">
                Order on DoorDash
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">
                Order on GrubHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
