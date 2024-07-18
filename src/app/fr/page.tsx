import Image from "next/image";
import Hero from "@/components/fr/Hero";
import Services from "@/components/fr/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
<Hero/>
<Services/>
    </main>
  );
}
