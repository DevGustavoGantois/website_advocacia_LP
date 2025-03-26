import { FileSignature, FileText, Gavel, Scale } from "lucide-react"
import Image from "next/image"
import { faqData } from "./v-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HomeFAQ() {
    return (
        <section id="faq" className="relative">
            <div className="absolute top-80 lg:inset-0 w-full h-full -z-50">
                <Image src="/BgFAQ.svg" width={2560} height={1440} alt="" />
            </div>
            <div className="mt-20 lg:mt-40 z-10 max-w-[1440px] mx-auto p-8 lg:p-9">
                <div className="max-w-[1440px] mx-auto p-0 lg:p-8">
                    <div className="flex flex-col items-center gap-8 lg:flex-row justify-center lg:justify-between">
                        <article className="flex flex-col gap-2 items-center mt-10 lg:mt-32">
                            <h4 className="text-sm lg:text-base font-primary text-[#9E7A5F]">FAQ</h4>
                            <h1 className="text-center font-primary text-black text-4xl lg:text-6xl">Perguntas Frequentes</h1>
                            <div className="mt-10">
                                {faqData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Accordion type="single" collapsible>
                                                <AccordionItem value={String(0)}>
                                                    <AccordionTrigger className="font-primary">{item.question}</AccordionTrigger>
                                                    <AccordionContent>
                                                        {item.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    )
                                })}
                            </div>
                        </article>
                        <figure className="mt-10 lg:mt-32 w-full max-w-[500px]">
                            <div className="relative p-6 pt-32 pb-32 bg-gradient-to-b from-[#9E7A5F] to-[#563F2E] rounded-md">
                                <ul className="flex flex-col gap-10 items-start">
                                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 z-50">
                                        <Scale size={32} className="text-white" />
                                        <p className="text-white text-center lg:text-start text-sm lg:text-base max-w-[300px]">
                                            Nossa equipe de advogados está pronta para oferecer a melhor assessoria jurídica.
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 z-50">
                                        <FileText size={32} className="text-white" />
                                        <p className="text-white text-center lg:text-start text-sm lg:text-base max-w-[300px]">
                                            Cada caso é único e merece uma abordagem estratégica.
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 z-50">
                                        <Gavel size={32} className="text-white" />
                                        <p className="text-white text-center lg:text-start text-sm lg:text-base max-w-[300px]">
                                            Valorizamos a comunicação clara e acessível. 
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 z-50">
                                        <FileSignature size={32} className="text-white" />
                                        <p className="text-white text-center lg:text-start text-sm lg:text-base max-w-[300px]">
                                            Contamos com advogados experientes em direito civil, trabalhista, empresarial, previdenciário e muito mais...
                                        </p>
                                    </div>
                                </ul>
                                <div className="absolute inset-0 w-full h-full">
                                    <Image className="w-full h-full object-cover" src="/ImgFAQ.svg" width={800} height={800} alt="" /> {/* Ajustei para `object-cover` */}
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
