import Image from "next/image";
import { Button } from "../ui/button";

const services = [
  {
    title: "Nettoyage des surfaces",
    description:
      "Nous fournissons des services professionnels de nettoyage de surfaces pour garder vos espaces impeccables et hygiéniques.",
    image: "/surface-cleaning.jpg",
    alt: "Nettoyage des surfaces",
  },
  {
    title: "Nettoyage de flotte",
    description:
      "Nos services de nettoyage de flotte garantissent que vos véhicules sont propres et présentables.",
    image: "/fleet-cleaning.jpg",
    alt: "Nettoyage de flotte",
  },
  {
    title: "Suppression des graffitis",
    description:
      "Nous offrons des services efficaces d’élimination des graffitis pour conserver l’apparence de votre propriété.",
    image: "/graffiti-removal.jpg",
    alt: "Suppression des graffitis",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nos services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nous proposons une large gamme de services pour aider votre
              entreprise à réussir. Du nettoyage des surfaces à l’élimination
              des graffitis, nous avons ce qu’il vous faut.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 rounded-lg p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <Button className="rounded-full bg-[#065D98] hover:bg-[#56BA40]">
                Reserve maintenant
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
