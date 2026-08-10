import Header from "@/components/layout/Header";
import Clients from "@/components/sections/client";
import Community from "@/components/sections/Community";
import FeatureSection from "@/components/sections/FeatureSection";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import { landingPage } from "@/data/landingpage";

export default function Home() {
  return (
    <main>
      <Header data={landingPage.header} />
      <Hero data={landingPage.hero} />
      <Clients data={landingPage.clients} />
      <Community data={landingPage.community} />
       {landingPage.features.map((feature) => (
        <FeatureSection
          key={feature.id}
          data={feature}
        />
      ))}
      <Statistics data={landingPage.statistics} />
    </main>
  );
}
