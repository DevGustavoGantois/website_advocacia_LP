import { Button } from "@/components/ui/button";
import { articleData } from "./v-data";
import Link from "next/link";
import Image from "next/image";

export function HomeArticles() {
    return (
        <section id="articles" className="max-w-[1240px] mx-auto p-8 lg:p-0 mt-20 lg:mt-40 relative">
            {articleData.map((item, index) => (
                <div key={index} className="relative bg-gradient-to-r from-[#9E7A5F] to-[#563F2E] w-full h-full flex items-center justify-center overflow-hidden rounded-xl p-6 lg:p-20">
                    <Image 
                        src={item.img} 
                        layout="fill" 
                        objectFit="cover" 
                        alt="Article Background"
                        className=""
                    />
                    <div className="absolute inset-0" />
                    <div className="relative z-10 text-center text-white px-6 mt-10">
                        <h1 className="text-4xl lg:text-6xl font-primary" data-aos="fade-down">{item.title}</h1>
                        <p className="text-white/80 max-w-[662px] mx-auto mt-4" data-aos="fade-down" data-aos-delay="200">{item.description}</p>
                        <Button variant="secondary" className="mt-6 font-primary">
                            <Link href="https://milaoliver94.jusbrasil.com.br/" target="_blank">
                                {item.btnText}
                            </Link>
                        </Button>
                    </div>
                </div>
            ))}
        </section>
    );
}
