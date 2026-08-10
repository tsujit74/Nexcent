import Image from "next/image";
import type { ClientsData } from "@/types/landingpage";

interface ClientsProps {
  data: ClientsData;
}

export default function Clients({ data }: ClientsProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[#4D4D4D] md:text-4xl">
            {data.title}
          </h2>

          <p className="mt-2 text-3xl text-[#717171] md:text-base">
            {data.description}
          </p>
        </div>

     
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-4 md:grid-cols-7 md:gap-8">
          {data.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 w-full items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={48}
                height={48}
                className="h-auto max-h-15 w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}