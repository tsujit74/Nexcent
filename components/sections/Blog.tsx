import Image from "next/image";
import type { BlogData } from "@/types/landingpage";

interface BlogProps {
  data: BlogData;
}

export default function Blog({ data }: BlogProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-semibold text-[#4D4D4D] md:text-4xl">
            {data.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#717171] md:text-base">
            {data.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {data.posts.map((post) => (
            <article key={post.title}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={368}
                  height={250}
                  className="h-[250px] w-full object-cover"
                />
              </div>

              <div className="relative mx-6 -mt-18 flex min-h-[180px] flex-col rounded-lg bg-[#F5F7FA] px-5 py-5 text-center shadow-lg">
                <h3 className="text-lg font-semibold leading-7 text-[#717171]">
                  {post.title}
                </h3>

                <a
                  href={post.link}
                  className="mt-auto inline-flex items-center justify-center pt-4 text-1xl font-bold text-[#4CAF4F]"
                >
                  Readmore
                  <span className="ml-2 font-semibold text-2xl">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
