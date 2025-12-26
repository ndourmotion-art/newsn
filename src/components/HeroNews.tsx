import { Badge } from "@/components/ui/badge";

interface HeroNewsProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export function HeroNews({ image, category, title, excerpt, date }: HeroNewsProps) {
  return (
    <article className="group relative overflow-hidden rounded-sm cursor-pointer">
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <Badge variant="accent" className="mb-4">
          {category}
        </Badge>
        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-4 max-w-4xl text-balance">
          {title}
        </h1>
        <p className="text-background/80 text-sm md:text-base leading-relaxed mb-4 max-w-2xl line-clamp-2">
          {excerpt}
        </p>
        <time className="text-xs text-background/60 uppercase tracking-wide">
          {date}
        </time>
      </div>
    </article>
  );
}
