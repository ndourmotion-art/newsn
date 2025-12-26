import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
}

export function NewsCard({
  image,
  category,
  title,
  excerpt,
  date,
  featured = false,
}: NewsCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-sm bg-card shadow-card hover:shadow-soft transition-all duration-300 cursor-pointer">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <Badge variant="category" className="mb-3">
            {category}
          </Badge>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {excerpt}
          </p>
          <time className="text-xs text-muted-foreground uppercase tracking-wide">
            {date}
          </time>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-4 py-4 border-b border-border last:border-0 cursor-pointer">
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-24 overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0">
        <Badge variant="category" className="mb-2">
          {category}
        </Badge>
        <h3 className="font-serif text-base md:text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <time className="text-xs text-muted-foreground uppercase tracking-wide">
          {date}
        </time>
      </div>
    </article>
  );
}
