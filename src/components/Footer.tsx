import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface BlogPost {
  title: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Essential barbering tips you need to know before you start",
    date: "Nov 09, 2017",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=100&h=100&fit=crop",
  },
  {
    title: "What are the 360 waves? and how you can get them",
    date: "Oct 30, 2017",
    image:
      "https://images.unsplash.com/photo-1519019121902-78eab0c0c2a7?w=100&h=100&fit=crop",
  },
  {
    title: "Discover what is the best haircut for your face shape?",
    date: "Oct 19, 2017",
    image:
      "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?w=100&h=100&fit=crop",
  },
];

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export default function Footer() {
  const { toast } = useToast();

  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: SubscribeFormValues) {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    form.reset();
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <a
              href="/"
              className="inline-flex items-center space-x-2 font-oswald italic text-2xl text-white"
              aria-label="Trimplate - Return to homepage"
            >
              <span className="text-primary" aria-hidden="true">
                ✂
              </span>
              <span>Trimplate</span>
            </a>
            <p className="text-sm leading-relaxed opacity-75">
              Proin gravida nibh vele velit auctorer aliquet anean lorem bindum
              auctor, nisi elit consete sie ipsums sagittisen id duis sede
              odiosit amet nibh.
            </p>
            <div
              className="space-y-2 text-sm opacity-75"
              role="table"
              aria-label="Opening Hours"
            >
              {[
                { day: "Monday", hours: "08:00 - 15:00" },
                { day: "Tuesday", hours: "10:00 - 16:00" },
                { day: "Wednesday", hours: "08:00 - 15:00" },
                { day: "Thursday", hours: "08:00 - 18:00" },
                { day: "Friday", hours: "07:00 - 19:00" },
                { day: "Saturday", hours: "CLOSED" },
                { day: "Sunday", hours: "CLOSED" },
              ].map((item) => (
                <div className="flex justify-between" role="row" key={item.day}>
                  <span role="cell">{item.day}</span>
                  <span
                    className="text-primary"
                    role="cell"
                    aria-label={item.hours === "CLOSED" ? "Closed" : item.hours}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Feed */}
          <InstagramFeed />

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-oswald text-white mb-6">Quick Links</h3>
            <nav aria-label="Footer navigation" className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/shop", label: "Shop" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm opacity-75 hover:text-primary transition-colors"
                  data-track="Click"
                  data-category="Footer"
                  data-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-oswald text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <address className="text-sm opacity-75 not-italic">
                1220 Petersham town, Wardll St
                <br />
                New South Wales, Australia PA 6550
              </address>
              <p className="text-sm opacity-75">
                <a
                  href="tel:0449157110"
                  className="hover:text-primary transition-colors"
                  aria-label="Call us at 04 491 570 110"
                >
                  (04) 491 570 110
                </a>
              </p>
              <p className="text-sm opacity-75">
                <a
                  href="mailto:contact@trimplate.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@trimplate.com
                </a>
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-2 pt-4"
                  aria-label="Newsletter subscription"
                  data-track="Form"
                  data-category="Newsletter"
                  data-label="Footer Subscribe"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-gray-700"
                            aria-label="Email address for newsletter"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-black uppercase whitespace-nowrap"
                    disabled={form.formState.isSubmitting}
                    data-track="Submit"
                    data-category="Newsletter"
                    data-label="Footer Subscribe"
                  >
                    {form.formState.isSubmitting ? "..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-50">
            <p>&copy; {currentYear} Trimplate. All rights reserved.</p>
            <p className="text-xs mt-1">
              <a
                href="/sitemap"
                className="hover:text-primary transition-colors"
              >
                Sitemap
              </a>
              {" | "}
              <a
                href="/accessibility"
                className="hover:text-primary transition-colors"
              >
                Accessibility
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            {[
              {
                href: "https://facebook.com/trimplate",
                icon: Facebook,
                label: "Facebook",
              },
              {
                href: "https://twitter.com/trimplate",
                icon: Twitter,
                label: "Twitter",
              },
              {
                href: "https://linkedin.com/company/trimplate",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://instagram.com/trimplate",
                icon: Instagram,
                label: "Instagram",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="Click"
                  data-category="Social"
                  data-label={social.label}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span className="sr-only">Follow us on {social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
