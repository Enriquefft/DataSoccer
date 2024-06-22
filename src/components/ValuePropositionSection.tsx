import Image from "next/image";

type ValuePropositionSectionProps = {
  title: string;
  text: string;
  image: string;
  children: React.ReactNode;
};

/**
 * @param props - The props of the component
 * @param props.title - The title of the value proposition section
 * @param props.text - A short description of the value proposition section
 * @param props.image - The image of the value proposition section
 * @param props.children - The children of the value proposition section
 * @returns The ValuePropositionSection component
 */
export function ValuePropositionSection({
  title,
  text,
  image,
  children,
}: ValuePropositionSectionProps) {
  return (
    <section className="container w-full bg-muted px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {text}
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Image
          src={image}
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        {children}
      </div>
    </section>
  );
}
