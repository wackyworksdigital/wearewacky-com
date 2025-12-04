import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative noise">
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <Footer />
    </main>
  );
}
