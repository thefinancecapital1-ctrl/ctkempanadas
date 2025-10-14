import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Users, Calendar, Sparkles } from "lucide-react";

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Catering inquiry submitted! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Catering Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Bring authentic handcrafted empanadas to your next event
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">
              Perfect for Any Event
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Corporate Events
                  </h3>
                  <p className="text-muted-foreground">
                    Impress clients and colleagues with our delicious, portable empanadas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Private Parties
                  </h3>
                  <p className="text-muted-foreground">
                    Birthdays, weddings, celebrations - we make every event special
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Flexible Options
                  </h3>
                  <p className="text-muted-foreground">
                    Customizable menus and portion sizes to fit your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-heading font-bold mb-3">
                What's Included
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Fresh, handcrafted empanadas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Selection of savory and sweet options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Traditional chimichurri sauce
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Eco-friendly serving supplies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Professional delivery and setup
                </li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="guestCount">Number of Guests *</Label>
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message">Event Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, dietary requirements, and any special requests..."
                  className="mt-1.5 min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-6">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
