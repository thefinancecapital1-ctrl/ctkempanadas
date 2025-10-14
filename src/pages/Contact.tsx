import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
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
    <div className="min-h-screen py-20 bg-grain relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-blur-in">
          <h1 className="text-5xl font-heading font-bold mb-6 gradient-text-animated">Get in Touch</h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Have a question or want to say hello? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-roll-in float-particles">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 animate-fade-in-left hover-lift" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-scale hover-rotate">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Email</h3>
                  <a
                    href="mailto:hello@ctkempanadas.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@ctkempanadas.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in-left hover-lift" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-scale hover-rotate">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Phone</h3>
                  <a
                    href="tel:+14155551234"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (415) 555-1234
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 border border-border mb-8 animate-scale-in hover-lift" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-heading font-bold mb-6 gradient-text">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-glow click-bounce animate-float"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-glow click-bounce animate-float"
                  style={{ animationDelay: "0.5s" }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-lg font-heading font-bold mb-2">
                Business Hours
              </h3>
              <p className="text-muted-foreground">
                We're at farmers markets throughout the week. Check our{" "}
                <a href="/locations" className="text-primary hover:underline">
                  Locations page
                </a>{" "}
                for specific times and places.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border hover-glow animate-flip-in card-shine">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Send Us a Message
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
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="mt-1.5 min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover-shine click-bounce hover-glow">
                Send Message
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

export default Contact;
