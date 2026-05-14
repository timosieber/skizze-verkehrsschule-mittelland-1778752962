import type { Metadata } from "next";
import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://verkehrsschule-mittelland-skizze.up.railway.app";
const SITE_NAME = "Verkehrsschule Mittelland";
const DESCRIPTION =
  "Auto-Fahrschule für Trimbach, Olten, Aarau, Basel, Baselland und Langenthal. Fahrstunden ab CHF 95.–, VKU, Nothelferkurs, BPT-Taxi. Eidg. geprüfte Fahrlehrer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Fahrschule Trimbach · Olten · Aarau · Basel`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Fahrschule Trimbach",
    "Fahrschule Olten",
    "VKU Olten",
    "VKU Trimbach",
    "Nothelferkurs Olten",
    "Nothelferkurs Trimbach",
    "Fahrstunden Solothurn",
    "Auto-Fahrschule Mittelland",
    "Fahrschule Aarau",
    "Fahrschule Basel",
    "Fahrschule Langenthal",
  ],
  authors: [{ name: "Verkehrsschule Mittelland" }],
  openGraph: {
    title: `${SITE_NAME} · Deine Auto-Fahrschule`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de-CH"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
