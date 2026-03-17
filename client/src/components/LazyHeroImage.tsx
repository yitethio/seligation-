import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyHeroImageProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}

export function LazyHeroImage({ src, className, style }: LazyHeroImageProps) {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "200px", // Start loading 200px before it enters the viewport
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setIsLoaded(true);
            };
        }
    }, [isInView, src]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "bg-cover bg-center bg-blend-overlay transition-opacity duration-1000",
                isLoaded ? "opacity-100" : "opacity-0",
                className
            )}
            style={{
                ...style,
                backgroundImage: isLoaded ? `url('${src}')` : "none",
            }}
        />
    );
}
