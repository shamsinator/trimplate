import TopBar from "../TopBar";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  Clock,
  MessageCircle,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  tags: string[];
}

const post: BlogPost = {
  title: "The Power of Gratitude: Cultivating Joy and Abundance",
  excerpt:
    "Incorporating gratitude into our daily where we write down three things we are grateful for each day.",
  content: [
    "Shifting our perspective from lack to abundance. In this article, we will explore the power of gratitude and how it can enhance our overall well-being and create a positive ripple effect in our lives and the lives of those around us. In a world filled with chaos and uncertainty, it's easy to lose sight of the things that truly matter.",
    "Additionally, expressing gratitude to others through acts of kindness or heartfelt appreciation strengthens our relationships and fosters a sense of interconnectedness.",
    "Incorporating gratitude into our daily routine can be as simple as keeping a gratitude journal, where we write down three things we are grateful for each day. This practice helps us become more attuned to the positive aspects of our lives, no matter how small they may seem.",
    "By reframing obstacles as opportunities for growth and learning, we can navigate through difficulties with a sense of gratitude for the lessons they bring. This mindset shift empowers us to find joy and meaning in every circumstance, leading to a more fulfilling and purposeful life.",
  ],
  date: "Nov 09, 2023",
  readTime: "2 min read",
  likes: 14,
  comments: 5,
  author: {
    name: "Louis Crawford",
    role: "Content Creator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Louis",
  },
  image:
    "https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?w=2000&h=800&fit=crop",
  tags: [
    "blog",
    "business",
    "bootstrap",
    "data science",
    "deep learning",
    "Adventure",
    "Community",
    "Interview",
    "Photography",
    "Classic",
  ],
};

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Trimplate</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <TopBar />
      <Header />

      <main className="py-20">
        <article className="container max-w-4xl">
          {/* Header */}
          <header className="text-center space-y-6 mb-12">
            <div className="space-y-4">
              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h3 className="font-medium">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-oswald tracking-tight">
                {post.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-[2/1] mb-12 rounded-lg overflow-hidden bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              width="2000"
              height="800"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 flex items-center justify-between py-6 border-t border-b">
            <span className="font-medium">Was this article helpful?</span>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Yes
              </Button>
              <Button variant="outline" size="sm">
                No
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related post:</h2>
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=200&fit=crop"
                  alt="Related post"
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium mb-2">
                    5 Investment doubts you should clarify
                  </h3>
                  <p className="text-sm text-muted-foreground">Nov 09, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
