import Image from "next/image";
import { Button } from "../ui/button";

const services = [
  {
    title: "Surface Cleaning",
    description:
      "We provide professional surface cleaning services to keep your spaces spotless and hygienic.",
    image: "/surface-cleaning.jpg",
    alt: "Surface Cleaning",
  },
  {
    title: "Fleet Cleaning",
    description:
      "Our fleet cleaning services ensure that your vehicles are clean and presentable.",
    image: "/fleet-cleaning.jpg",
    alt: "Fleet Cleaning",
  },
  {
    title: "Graffiti Removal",
    description:
      "We offer efficient graffiti removal services to maintain the appearance of your property.",
    image: "/graffiti-removal.jpg",
    alt: "Graffiti Removal",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help your business succeed.
              From surface cleaning to graffiti removal, we've got you covered.
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
              <Button className="rounded-full bg-[#065D98] hover:bg-[#035186]">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
