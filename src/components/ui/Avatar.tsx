import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = "md", shape = "circle", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center bg-gray-100 text-gray-600 font-medium overflow-hidden",
          shape === "circle" ? "rounded-full" : "rounded-lg",
          {
            "h-8 w-8 text-xs": size === "sm",
            "h-10 w-10 text-sm": size === "md",
            "h-12 w-12 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Avatar.displayName = "Avatar";

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  delayMs?: number;
}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex items-center justify-center w-full h-full",
          className
        )}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt, fallback, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      if (!src) {
        setError(true);
        return;
      }

      // Convert Blob to URL string if necessary
      const imageUrl = typeof src === 'string' ? src : URL.createObjectURL(src);
      
      const img = new window.Image();
      img.src = imageUrl;
      img.onload = () => {
        setIsLoading(false);
        setError(false);
      };
      img.onerror = () => {
        setIsLoading(false);
        setError(true);
      };

      // Cleanup: revoke object URL if it was created from a Blob
      return () => {
        if (typeof src !== 'string') {
          URL.revokeObjectURL(imageUrl);
        }
      };
    }, [src]);

    if (isLoading || error || !src) {
      return fallback ? (
        <>{fallback}</>
      ) : (
        <AvatarFallback className={className} {...props} />
      );
    }

    return (
      <Image
        ref={ref}
        className={cn("w-full h-full object-cover", className)}
        src={typeof src === 'string' ? src : URL.createObjectURL(src)}
        alt={alt || "Avatar"}
        {...props}
        width={undefined}
        height={undefined}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

export { Avatar, AvatarFallback, AvatarImage };