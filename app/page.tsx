import { Header } from "@/components/nav/Header";
import { Hero } from "@/components/sections/Hero";
import { Standorte } from "@/components/sections/Standorte";
import { Angebote } from "@/components/sections/Angebote";
import { Weg } from "@/components/sections/Weg";
import { Werte } from "@/components/sections/Werte";
import { Team } from "@/components/sections/Team";
import { Termine } from "@/components/sections/Termine";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Standorte />
        <Angebote />
        <Weg />
        <Werte />
        <Team />
        <Termine />
      </main>
      <Footer />
    </>
  );
}
