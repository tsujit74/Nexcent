import type { StatisticsData } from "@/types/landingpage";
import StatisticItem from "@/components/ui/StatisticItem";

interface StatisticsProps {
  data: StatisticsData;
}

export default function Statistics({
  data,
}: StatisticsProps) {
  return (
    <section className="bg-[#F5F7FA] py-14 md:py-18">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 lg:items-center lg:px-0">
        
        <div>
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

    
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.items.map((item) => (
            <StatisticItem
              key={item.label}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}