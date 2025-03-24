import { Button } from "@/components/ui/button";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="grid gap-12">
      {posts.map((post, index) => (
        <article key={post.title} className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[2/1] overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">
                {post.date} • By {post.author}
              </span>
              <h2 className="text-2xl font-bold font-oswald">{post.title}</h2>
            </div>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <Button
              variant="outline"
              onClick={() => (window.location.href = `/blog/${index + 1}`)}
              aria-label={`Read full article: ${post.title}`}
            >
              Read More
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
