import { MessageCircleIcon, Users } from "lucide-react";
import { contactData } from "./v-data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HomeContact() {
    return (
        <section id="contact" className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-20 lg:mt-40">
            {contactData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
                            <div className="p-9 bg-gradient-to-b from-[#E3E3E3] to-[#FFFF] rounded-md">
                                <div className="flex justify-center items-center flex-col gap-3">
                                <figure className="rounded-md bg-gradient-to-b from-[#9E7A5F] to-[#563F2E] p-2 transition-all duration-700 hover:scale-[1.1]">
                                    <Link href="" target="_blank">
                                    <MessageCircleIcon className="text-white" size={24} />
                                    </Link>
                                </figure>
                                 <p className="text-center font-light max-w-[250px]">{item.description_one}</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-[#9E7A5F] to-[#563F2E] rounded-md relative">
                             <Image className="w-full h-full -z-10" src={item.imgBg} width={300} height={400} alt="" />
                            </div>
                            <div className="px-12 py-2 bg-gradient-to-r from-[#E3E3E3] to-[#FFFF] rounded-md">
                                <article className="flex flex-col gap-2 items-center lg:items-start justify-center">
                                 <figure className="flex items-center gap-1">
                                    <Users size={24} className="text-yellow-500" />
                                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F1D67D] to-[#D18400] font-primary text-start">{item.pretitle}</p>
                                 </figure>
                                 <h1 className="text-xl font-primary text-center lg:text-start">{item.title}</h1>
                                 <p className="font-light max-w-[300px] text-center lg:text-start">{item.description_two}</p>
                                 <Button className="font-primary font-normal">
                                    <Link href="" target="_blank">
                                     {item.btnText}
                                    </Link>
                                 </Button>
                                </article>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}