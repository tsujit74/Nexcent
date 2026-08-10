import Image from "next/image";
import type { StatisticItem as StatisticItemData } from "@/types/landingpage";

interface StatisticItemProps {
  data: StatisticItemData;
}

export default function StatisticItem({
  data,
}: StatisticItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Image
          src={data.icon}
          alt=""
          width={45}
          height={45}
          className="h-12 w-12 object-contain"
        />
      </div>

      <div>
        <p className="text-2xl font-bold text-[#4D4D4D] md:text-3xl">
          {data.value}
        </p>

        <p className="mt-0.5 text-1xl text-[#717171]">
          {data.label}
        </p>
      </div>
    </div>
  );
}