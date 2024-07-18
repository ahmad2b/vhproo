import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center px-4 lg:px-24">
      <img
        src="/washing.jpg"
        alt="Pressure Washing"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 max-w-3xl px-4 md:px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
          Professional Pressure Washing Services
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md">
          Transform your property with our top-notch pressure washing solutions. We'll make your surfaces look brand new
          again.
        </p>
        <Link
          href="#"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Request a Quote
        </Link>
      </div>
    </section>
  )
}