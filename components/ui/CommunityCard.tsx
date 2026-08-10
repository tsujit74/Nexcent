import Image from "next/image";
import type { CommunityCard as CommunityCardData } from "@/types/landingpage";

interface CommunityCardProps {
  data: CommunityCardData;
}

export default function CommunityCard({
  data,
}: CommunityCardProps) {
  return (
    <article className="rounded-lg bg-white px-6 py-8 text-center shadow-sm">
      <Image
        src={data.icon}
        alt=""
        width={80}
        height={80}
        className="mx-auto"
      />

      <h3 className="mx-auto mt-5 max-w-[220px] text-3xl font-bold leading-7 text-[#4D4D4D]">
        {data.title}
      </h3>

      <p className="mx-auto mt-3 max-w-[250px] text-sm leading-5 text-[#717171]">
        {data.description}
      </p>
    </article>
  );
}