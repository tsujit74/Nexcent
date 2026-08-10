import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { landingPage } from "@/data/landingpage";

export default function Home() {
  return (
    <main>
      <Header data={landingPage.header} />
      <Hero data={landingPage.hero} />
    </main>
  );
}
