import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const categories = [
  "Actualités",
  "Politique",
  "Économie",
  "Sports",
  "Culture",
  "Société",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Sénégal<span className="text-secondary">Info</span>
            </span>
          </a>

          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-muted rounded-sm transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            <button
              className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 pb-3 overflow-x-auto">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
