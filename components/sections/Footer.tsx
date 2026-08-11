import Image from "next/image";
import type { FooterData } from "@/types/landingpage";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-[#263238] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:px-0">
        <div>
          <div>
            <a
              href={data.logo.href}
              className="flex shrink-0 items-center gap-2"
              aria-label={data.logo.alt}
            >
              <Image
                src={data.logo.image}
                alt=""
                width={50}
                height={32}
                priority
                className="h-auto w-[50px]"
              />

              <span className="text-[35px] font-semibold leading-none text-white">
                Nexcent
              </span>
            </a>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-300">{data.copyright}</p>

            <p className="mt-2 text-sm text-gray-300">{data.rights}</p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {data.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Image
                  src={social.icon}
                  alt={social.iconAlt}
                  width={18}
                  height={18}
                  className="h-4 w-4 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">{data.company.title}</h3>

          <ul className="mt-6 space-y-3">
            {data.company.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">{data.support.title}</h3>

          <ul className="mt-6 space-y-3">
            {data.support.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">{data.newsletter.title}</h3>

          <form className="mt-6 flex overflow-hidden rounded-lg bg-white/10">
            <input
              type="email"
              placeholder={data.newsletter.placeholder}
              aria-label={data.newsletter.placeholder}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#F5F7FA]/70"
            />

            <button
              type="submit"
              aria-label={data.newsletter.buttonIconAlt}
              className="flex items-center justify-center px-4 transition-colors hover:bg-white/10"
            >
              <Image
                src={data.newsletter.buttonIcon}
                alt={data.newsletter.buttonIconAlt}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
