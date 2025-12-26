import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroNews } from "@/components/HeroNews";
import { NewsCard } from "@/components/NewsCard";

import heroDakar from "@/assets/hero-dakar.jpg";
import newsPolitics from "@/assets/news-politics.jpg";
import newsEconomy from "@/assets/news-economy.jpg";
import newsSports from "@/assets/news-sports.jpg";
import newsCulture from "@/assets/news-culture.jpg";
import newsSociety from "@/assets/news-society.jpg";

const featuredArticles = [
  {
    image: newsPolitics,
    category: "Politique",
    title: "Le gouvernement annonce de nouvelles réformes économiques pour 2025",
    excerpt: "Le président a présenté un plan ambitieux pour stimuler la croissance et réduire le chômage dans le pays.",
    date: "26 Décembre 2024",
  },
  {
    image: newsEconomy,
    category: "Économie",
    title: "Le port de Dakar bat son record de trafic maritime",
    excerpt: "Les exportations sénégalaises connaissent une hausse significative ce trimestre.",
    date: "26 Décembre 2024",
  },
  {
    image: newsSports,
    category: "Sports",
    title: "Les Lions de la Teranga se qualifient pour la prochaine CAN",
    excerpt: "Une victoire éclatante qui confirme la place du Sénégal parmi les grandes nations du football africain.",
    date: "25 Décembre 2024",
  },
];

const latestNews = [
  {
    image: newsCulture,
    category: "Culture",
    title: "Le Festival de Jazz de Saint-Louis annonce sa programmation",
    excerpt: "Des artistes internationaux rejoindront les talents locaux pour célébrer la musique.",
    date: "25 Décembre 2024",
  },
  {
    image: newsSociety,
    category: "Société",
    title: "Les marchés de Dakar se préparent pour les fêtes de fin d'année",
    excerpt: "Une affluence record est attendue dans les principaux marchés de la capitale.",
    date: "24 Décembre 2024",
  },
  {
    image: newsPolitics,
    category: "Politique",
    title: "Nouvelle initiative pour la digitalisation des services publics",
    excerpt: "Le gouvernement lance un programme ambitieux de modernisation administrative.",
    date: "24 Décembre 2024",
  },
  {
    image: newsEconomy,
    category: "Économie",
    title: "Les investissements étrangers en hausse de 15%",
    excerpt: "Le Sénégal attire de plus en plus d'investisseurs internationaux.",
    date: "23 Décembre 2024",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container py-6">
          <HeroNews
            image={heroDakar}
            category="À la une"
            title="Dakar, capitale en pleine transformation : les grands projets qui redessinent la ville"
            excerpt="Entre modernisation des infrastructures et préservation du patrimoine, la capitale sénégalaise s'inscrit dans une nouvelle ère de développement urbain durable."
            date="26 Décembre 2024"
          />
        </section>

        {/* Featured Articles */}
        <section className="container py-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
            Articles à la une
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NewsCard {...article} featured />
              </div>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                Dernières actualités
              </h2>
              <div>
                {latestNews.map((article, index) => (
                  <NewsCard key={index} {...article} />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                  Rubriques
                </h3>
                <nav className="space-y-2">
                  {["Politique", "Économie", "Sports", "Culture", "Société", "International"].map(
                    (category) => (
                      <a
                        key={category}
                        href={`#${category.toLowerCase()}`}
                        className="block py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors border-l-2 border-transparent hover:border-primary"
                      >
                        {category}
                      </a>
                    )
                  )}
                </nav>
                
                <div className="mt-8 p-6 bg-primary rounded-sm">
                  <h4 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                    Newsletter
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Recevez les actualités directement dans votre boîte mail.
                  </p>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
                  />
                  <button className="w-full mt-3 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/90 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
