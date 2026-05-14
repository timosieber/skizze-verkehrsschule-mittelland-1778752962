export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Verkehrsschule Mittelland",
    description:
      "Auto-Fahrschule mit Standorten in Trimbach, Olten, Aarau, Basel, Baselland und Langenthal. Fahrstunden, VKU, Nothelferkurs, BPT-Taxi, Anhänger-Kurse.",
    url: "https://www.verkehrsschule-mittelland.ch",
    telephone: "+41791361616",
    email: "info@verkehrsschule-mittelland.ch",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Baslerstrasse 67",
      postalCode: "4632",
      addressLocality: "Trimbach",
      addressRegion: "Solothurn",
      addressCountry: "CH",
    },
    areaServed: [
      { "@type": "City", name: "Trimbach" },
      { "@type": "City", name: "Olten" },
      { "@type": "City", name: "Aarau" },
      { "@type": "City", name: "Basel" },
      { "@type": "City", name: "Liestal" },
      { "@type": "City", name: "Langenthal" },
    ],
    priceRange: "CHF 95.– bis CHF 190.–",
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
