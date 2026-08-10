import Image from "next/image";
import type { HeroData } from "@/types/landingpage";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="bg-[#F5F7FA]">
      <div className="mx-auto grid min-h-[600px] max-w-[1200px] items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-0 lg:py-10">
        <div>
          <h1 className="max-w-[650px] text-4xl font-semibold leading-tight text-[#4D4D4D] sm:text-5xl lg:text-[52px] lg:leading-[1.18]">
            {data.title.map((line, index) => (
              <span
                key={line}
                className={`block ${index === 1 ? "text-[#4CAF4F]" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[600px] text-base leading-6 text-[#717171]">
            {data.description}
          </p>

          <a
            href={data.button.href}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#4CAF4F] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#388E3C]"
          >
            {data.button.label}
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={450}
            height={400}
            priority
            className="h-auto w-full max-w-[430px]"
          />
        </div>
      </div>
    </section>
  );
}
