import Image from "next/image";
import { aboutMeData } from "./v-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeAboutMe() {
    return (
        <section id="about" className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-40 lg:mt-[500px]">
            <div>
               {aboutMeData.map((item, index) => {
                return (
                    <div key={index} className="flex items-center flex-col lg:flex-row justify-center lg:justify-between gap-8 mt-20">
                        <figure>
                            <Image src={item.img} width={500} height={800} alt="" />
                        </figure>
                        <article className="flex flex-col gap-4 justify-center items-start">
                            <h4 className="text-[#9E7A5F] text-sm lg:text-base font-primary">{item.pretitle}</h4>
                            <h1 className="text-4xl font-primary lg:text-6xl max-w-[750px] text-start text-black">{item.title}</h1>
                            <div className="w-1/5 border-3 border-[#9E7A5F] mb-3 mt-3 rounded-full" />
                            <p className="text-gray-500 max-w-[603px] text-sm lg:text-base">{item.description}</p>
                            <Button className="font-primary font-normal p-6">
                                <Link href="#contact">
                                {item.btnText}
                                </Link>
                            </Button>
                        </article>
                    </div>
                )
               })}
            </div>
        </section>
    )
}