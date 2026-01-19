import Script from "next/script";

interface StructuredDataProps {
  type: "WebApplication" | "WebSite" | "Organization" | "VideoGame";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "WebApplication":
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: data.name || "League of Gacha",
          description:
            data.description ||
            "Build your dream League of Legends roster with pro players",
          url: data.url || "https://league-of-gacha.pages.dev",
          applicationCategory: "GameApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: data.rating && {
            "@type": "AggregateRating",
            ratingValue: data.rating.value,
            ratingCount: data.rating.count,
          },
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "League of Gacha",
          url: "https://league-of-gacha.pages.dev",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://league-of-gacha.pages.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "League of Gacha",
          url: "https://league-of-gacha.pages.dev",
          logo: "https://league-of-gacha.pages.dev/log.png",
          sameAs: ["https://twitter.com/leagueofgacha"],
        };

      case "VideoGame":
        return {
          "@context": "https://schema.org",
          "@type": "VideoGame",
          name: data.name || "League of Gacha",
          description:
            data.description ||
            "Free online gacha game where you summon real League of Legends pro players from 2013-2025 to build your dream esports team. Features 200+ players from LCK, LPL, LEC, Worlds, and MSI.",
          url: data.url || "https://league-of-gacha.pages.dev",
          genre: ["Gacha Game", "Sports Game", "Team Builder", "Fantasy Game"],
          gamePlatform: "Web Browser",
          applicationCategory: "Game",
          operatingSystem: "Any (Web-based)",
          inLanguage: ["en", "ko"],
          numberOfPlayers: "1",
          playMode: "SinglePlayer",
          datePublished: "2024-01-01",
          dateModified: "2026-01-17",
          publisher: {
            "@type": "Organization",
            name: "League of Gacha Team",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          audience: {
            "@type": "PeopleAudience",
            suggestedMinAge: 13,
            audienceType: "League of Legends esports fans",
          },
          keywords:
            "League of Legends gacha, LOL pro players, esports team builder, LCK players, LPL players, Worlds champions, gacha game, fantasy roster, Faker, Deft, Rookie",
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
