import Image from "next/image";
import { heroData } from "./v-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export function HomeHero() {
  return (
    <section className="w-full z-10">
      <div className="hidden md:flex">
        <figure className="absolute inset-0 -z-50">
          <Image src="/BgHome.svg" width={1840} height={1440} alt="" />
        </figure>
      </div>
      <div className="flex md:hidden">
        <div
          className="absolute flex flex-col items-center justify-center w-full h-[900px] lg:h-[1170px] -z-50 -top-64 rounded-b-3xl lg:rounded-none bg-[left-70%] lg:bg-[center]"
          style={{
            backgroundImage: "url(/BgHome.svg)",
            backgroundSize: "cover",
            backgroundPosition: "calc(30%) center",
          }}
        />
      </div>
      <main className="max-w-[1440px] mx-auto p-8 lg:p-0">
        {heroData.map((item, index) => {
          return (
            <div key={index} className="p-4 md:p-12">
              <article className="flex flex-col gap-2 items-center justify-center lg:items-start">
                <h4 className="font-primary bg-clip-text text-transparent bg-gradient-to-r from-[#F1D67D] to-[#D18400] text-sm text-center lg:text-start lg:text-base">
                  {item.pretitle}
                </h4>
                <h1 className="text-white text-4xl lg:text-6xl max-w-[732px] text-center lg:text-start font-primary">
                  {item.title}
                </h1>
                <p className="text-gray-400 max-w-[656px] text-center lg:text-start">
                  {item.description}
                </p>
                <Button className="font-primary mt-2 flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-[#9E7A5F] to-[#563F2E] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="#services" className="flex items-center gap-2">
                    <Plus className="text-[#1B1B1B] bg-white p-2 rounded-full size-7" />
                    <span className="uppercase tracking-wide">{item.btnText}</span>
                  </Link>
                </Button>
              </article>
            </div>
          );
        })}
      </main>
    </section>
  );
}
