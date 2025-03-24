interface InstagramPost {
  id: string;
  image: string;
  link: string;
}

interface InstagramFeedProps {
  posts?: InstagramPost[];
}

const defaultPosts: InstagramPost[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=100&h=100&fit=crop",
    link: "https://instagram.com/p/1",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1519019121902-78eab0c0c2a7?w=100&h=100&fit=crop",
    link: "https://instagram.com/p/2",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?w=100&h=100&fit=crop",
    link: "https://instagram.com/p/3",
  },
];

export function InstagramFeed({ posts = defaultPosts }: InstagramFeedProps) {
  return (
    <div>
      <h3 className="text-xl font-oswald text-white mb-6">Instagram Feed</h3>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden group"
            aria-label={`View Instagram post ${post.id}`}
          >
            <img
              src={post.image}
              alt=""
              width="100"
              height="100"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
