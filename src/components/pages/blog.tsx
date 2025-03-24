import { Link } from "react-router-dom";
import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Essential barbering tips you need to know before you start",
    excerpt:
      "Learn the fundamental techniques and tips that every aspiring barber should know before starting their journey in the industry.",
    date: "Nov 09, 2023",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=400&fit=crop",
    author: "James Wilson",
  },
  {
    title: "Discover what is the best haircut for your face shape?",
    excerpt:
      "Find out how to choose the perfect haircut that complements your face shape and enhances your best features.",
    date: "Oct 19, 2023",
    image:
      "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?w=800&h=400&fit=crop",
    author: "David Clark",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <PageHeader title="Blog" currentPage="BLOG" />
      <main className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold font-oswald uppercase tracking-wider">
              Latest Articles
            </h1>
            <p className="text-muted-foreground">
              Latest news and tips from the world of barbering
            </p>
          </div>

          <div className="grid gap-12">
            {posts.map((post, index) => (
              <article key={post.title} className="grid md:grid-cols-2 gap-8">
                <Link
                  to={`/blog/${index + 1}`}
                  className="aspect-[2/1] overflow-hidden rounded-lg block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </Link>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">
                      {post.date} • By {post.author}
                    </span>
                    <h2 className="text-2xl font-bold font-oswald hover:text-primary transition-colors">
                      <Link to={`/blog/${index + 1}`}>{post.title}</Link>
                    </h2>
                  </div>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="outline" asChild>
                    <Link to={`/blog/${index + 1}`}>Read More</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
