import Header from "@/components/layout/Header";
import { landingPage } from "@/data/landingpage";

export default function Home() {
  return (
    <main>
      <Header data={landingPage.header} />

    </main>
  );
}