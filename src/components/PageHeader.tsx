interface PageHeaderProps {
  title: string;
  currentPage: string;
}

export default function PageHeader({ title, currentPage }: PageHeaderProps) {
  return (
    <div className="relative h-[300px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=2070&fit=crop"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex flex-col items-center justify-center text-white space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">
            HOME
          </a>
          <span>→</span>
          <span className="text-primary">{currentPage}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold font-oswald uppercase tracking-wider">
          {title}
        </h1>
      </div>
    </div>
  );
}
