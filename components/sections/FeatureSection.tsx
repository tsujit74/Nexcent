import Image from "next/image";
import type { FeatureData } from "@/types/landingpage";

interface FeatureSectionProps {
  data: FeatureData;
}

export default function FeatureSection({
  data,
}: FeatureSectionProps) {
  const image = (
    <div className="flex justify-center">
      <Image
        src={data.image.src}
        alt={data.image.alt}
        width={442}
        height={433}
        className="h-auto w-full max-w-[442px]"
      />
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl">
        {data.title}
      </h2>

      <p className="mt-5 text-sm leading-6 text-[#717171] md:text-base">
        {data.description}
      </p>

      <div className="mt-8">
        <a
          href={data.button.href}
          className="inline-flex items-center justify-center rounded-md bg-[#4CAF4F] px-8 py-3 text-1xl font-medium text-white transition-colors hover:bg-[#388E3C]"
        >
          {data.button.label}
        </a>
      </div>
    </div>
  );

  return (
    <section
      id={data.id}
      className="bg-white py-10 md:py-10"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-5 px-6 md:grid-cols-2 lg:gap-10 lg:px-0">
        {data.imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
}