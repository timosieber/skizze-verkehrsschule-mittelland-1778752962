import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/design-system" },
    ],
    sitemap: "https://verkehrsschule-mittelland-skizze.up.railway.app/sitemap.xml",
  };
}
