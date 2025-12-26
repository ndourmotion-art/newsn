export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-serif font-bold">
              Sénégal<span className="text-secondary">Info</span>
            </span>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Votre source d'information fiable sur l'actualité sénégalaise. 
              Des nouvelles vérifiées, une couverture complète.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Rubriques
            </h4>
            <ul className="space-y-2">
              {["Actualités", "Politique", "Économie", "Sports", "Culture"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              À propos
            </h4>
            <ul className="space-y-2">
              {["Qui sommes-nous", "Contact", "Publicité", "Mentions légales"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © 2025 SénégalInfo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
