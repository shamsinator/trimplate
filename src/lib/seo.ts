interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export function updateMetaTags({
  title,
  description,
  image = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=630&fit=crop",
  type = "website",
}: SEOProps) {
  document.title = `${title} | Trimplate`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", `${title} | Trimplate`);
  }

  const ogDescription = document.querySelector(
    'meta[property="og:description"]',
  );
  if (ogDescription) {
    ogDescription.setAttribute("content", description);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute("content", image);
  }

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute("content", type);
  }
}
