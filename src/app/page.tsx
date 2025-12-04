import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative noise">
      <Hero />
      <Services />
      <TechStack />
      <Footer />
    </main>
  );
}
