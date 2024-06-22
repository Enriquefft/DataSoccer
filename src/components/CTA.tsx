import Image from "next/image";

/**
 * @returns CTA of landing page.
 */
export function CTA() {
  return (
    <section className="container w-full px-4 py-6 md:px-6 md:py-8 lg:py-12 xl:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_200px] lg:gap-8 xl:grid-cols-[1fr_400px]">
        <Image
          src="/soccer.jpg"
          width="550"
          height="310"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Unlock the Power of Blockchain and ML for Betting
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Empower betting experts to share their tips with a large audience,
              and give bettors the confidence to make informed decisions with
              verifiable data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
