import type { CommunityData } from "@/types/landingpage";
import CommunityCard from "@/components/ui/CommunityCard";

interface CommunityProps {
  data: CommunityData;
}

export default function Community({ data }: CommunityProps) {
  return (
    <section
      id="services"
      className="bg-white py-10 md:py-10"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl">
            {data.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-3 text-sm text-[#717171] md:text-base">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.cards.map((card) => (
            <CommunityCard
              key={card.title}
              data={card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}