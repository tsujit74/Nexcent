import Image from "next/image";
import type { ClientLogo, TestimonialData } from "@/types/landingpage";

interface TestimonialProps {
  data: TestimonialData;
  clientLogos: ClientLogo[];
}

export default function Testimonial({ data, clientLogos }: TestimonialProps) {
  return (
    <section className="bg-[#F5F7FA] py-10 md:py-8">
      <div className="mx-auto grid max-w-[1200px] items-center gap-20 px-6 md:grid-cols-[350px_1fr] lg:px-0">
      
        <div className="flex justify-center">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={350}
            height={350}
            className="h-[350px] w-[350px] rounded-2xl object-cover"
          />
        </div>

        <div>
          <blockquote className="text-2xl; leading-6 text-[#717171] md:text-xl">
            {data.quote}
          </blockquote>

          <div className="mt-5">
            <p className="text-lg font-semibold text-[#4CAF4F]">
              {data.author.name}
            </p>

            <p className="mt-1 text-1xl text-[#89939E]">{data.author.company}</p>
          </div>

          
          <div className="mt-8 flex flex-wrap items-center gap-7">
            {clientLogos.slice(0, 6).map((logo) => (
              <div
                key={logo.name}
                className="flex h-10 w-16 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={84}
                  height={50}
                  className="max-h-30 w-auto object-contain"
                />
              </div>
            ))}
            <a
              href={data.customerLink.href}
              className="ml-auto inline-flex items-center whitespace-nowrap text-xl font-semibold text-[#4CAF4F] transition-colors hover:text-[#388E3C]"
            >
              {data.customerLink.label}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
