import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({
  className,
  alt,
  fallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E",
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <img
      className={cn(
        "transition-opacity duration-300",
        isLoading && "opacity-0",
        className,
      )}
      alt={alt}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setError(true);
        setIsLoading(false);
        if (props.src !== fallback) {
          props.src = fallback;
        }
      }}
      {...props}
    />
  );
}
