import Image from "next/image";
import Hero from "@/components/fr/Hero";
import Services from "@/components/fr/Services";
import HowItWorks from "@/components/fr/How-it-works";
import Testimonials from "@/components/fr/Testimonials";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}
