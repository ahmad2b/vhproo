import { Button } from "@/components/ui/button";
import { Clock, Handshake, Calculator  } from 'lucide-react';

const steps = [
    {
      title: "Price Calculator",
      description:
        "Instantly receive accurate estimates for your needs with our real-time price calculator. No delays, no hidden costs.",
      icon: <Calculator className="w-6 h-6 text-secondary-foreground" />,
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
      hoverBg: "hover:bg-secondary",
      hoverText: "hover:text-secondary-foreground",
      button: "Contact Us",
    },
    {
      title: "Meet Surveyor",
      description:
        "Schedule a meeting with our expert surveyor to get detailed assessments and personalized recommendations.",
      icon: <Handshake className="w-6 h-6 text-secondary-foreground" />,
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
      hoverBg: "hover:bg-secondary",
      hoverText: "hover:text-secondary-foreground",
      button: "Contact Us",
    },
    {
      title: "Check Availability",
      description:
        "Easily book a free consultation to discuss service options or packages that best fit your requirements.",
      icon: <Clock className="w-6 h-6 text-secondary-foreground" />,
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
      hoverBg: "hover:bg-secondary",
      hoverText: "hover:text-secondary-foreground",
      button: "Contact Us",
    },
  ];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-[#065D98]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="md:text-3xl font-bold tracking-tighter text-4xl lg:text-5xl text-white">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform makes it easy to build and deploy web applications.
            Here's how it works.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-colors duration-300 ${step.hoverBg} ${step.hoverText}`}
            >
              <div
                className={`${step.bgColor} rounded-md p-3 flex items-center justify-center`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
              <Button variant="outline" className="mt-4">
              {step.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
