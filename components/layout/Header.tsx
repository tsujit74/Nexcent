import Image from "next/image";
import MobileMenu from "./MobileMenu";
import type { HeaderData } from "@/types/landingpage";
import Link from "next/link";

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="relative z-50 bg-[#F5F7FA]">
      <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between px-6 lg:px-0">
        <a
          href={data.logo.href}
          className="flex shrink-0 items-center"
          aria-label={data.logo.alt}
        >
          <Image
            src={data.logo.image}
            alt={data.logo.alt}
            width={154}
            height={32}
            priority
            className="h-auto w-[154px]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {data.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-1xl font-normal text-[#18191F] transition-colors hover:text-[#4CAF4F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {data.actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                action.variant === "primary"
                  ? "rounded-md bg-[#4CAF4F] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#388E3C]"
                  : "text-sm font-medium text-[#4CAF4F] transition-colors hover:text-[#388E3C]"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>

        <MobileMenu data={data} />
      </div>
    </header>
  );
}
