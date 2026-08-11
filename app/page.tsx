import Header from "@/components/layout/Header";
import Clients from "@/components/sections/client";
import Community from "@/components/sections/Community";
import FeatureSection from "@/components/sections/FeatureSection";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import { landingPage } from "@/data/landingpage";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header data={landingPage.header} />
      <Hero data={landingPage.hero} />
      <Clients data={landingPage.clients} />
      <Community data={landingPage.community} />
      <FeatureSection data={landingPage.features[0]} />
      <Statistics data={landingPage.statistics} />
      <FeatureSection data={landingPage.features[1]} />
      <Testimonial
        data={landingPage.testimonial}
        clientLogos={landingPage.clients.logos}
      />
      <Blog data={landingPage.blog} />
      <CTA data={landingPage.cta} />
      <Footer data={landingPage.footer}/>
    </main>
  );
}
