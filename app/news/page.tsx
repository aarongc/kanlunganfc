import NewsCard from "@/components/cards/NewsCard";

const news = [
  {
    slug: "u12-city-championship-win",
    title: "Kanlungan FC U12 Wins City Championship",
    excerpt: "Our U12 team secured a thrilling victory in the Cebu City Youth Championship final, showcasing incredible teamwork and determination.",
    date: "June 8, 2026",
  },
  {
    slug: "new-training-facility",
    title: "New Training Facility Opening Soon",
    excerpt: "We're excited to announce that our new state-of-the-art training facility will be opening next month, providing better resources for all our teams.",
    date: "June 5, 2026",
  },
  {
    slug: "2026-season-registration",
    title: "Registration Open for 2026 Season",
    excerpt: "Registration is now open for the upcoming 2026 season. Join Kanlungan FC and be part of Cebu's premier youth football program.",
    date: "June 1, 2026",
  },
  {
    slug: "u16-tournament-success",
    title: "U16 Team Advances to Regional Finals",
    excerpt: "Our U16 squad has shown exceptional performance throughout the regional tournament, earning their spot in the finals next month.",
    date: "May 28, 2026",
  },
  {
    slug: "coach-spotlight-may",
    title: "Coach Spotlight: Meet Coach Miguel",
    excerpt: "Get to know Coach Miguel, our U12 head coach who has been instrumental in developing young talent at Kanlungan FC.",
    date: "May 25, 2026",
  },
  {
    slug: "community-outreach",
    title: "Kanlungan FC Community Football Clinic",
    excerpt: "We hosted a free football clinic for local youth, sharing our passion for the game and giving back to the community.",
    date: "May 20, 2026",
  },
];

export default function NewsPage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Stay updated with the latest from Kanlungan FC
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <NewsCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

