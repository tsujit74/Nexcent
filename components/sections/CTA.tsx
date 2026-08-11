import type { CtaData } from "@/types/landingpage";

interface CTAProps {
  data: CtaData;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-8">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="text-4xl font-semibold leading-tight text-[#263238] md:text-4xl lg:text-6xl">
          {data.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <a
          href={data.button.href}
          className="mt-8 inline-flex items-center rounded-md bg-[#4CAF4F] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#388E3C]"
        >
          {data.button.label}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}