import Image from "next/image";
import { servicesData } from "./v-data";

export function HomeServices() {
  return (
    <section id="services" className="relative mt-20 lg:mt-40">
    <div className="flex flex-col gap-2 items-center justify-start mb-10">
     <h4 className="text-[#9E7A5F] text-center font-primary text-sm lg:text-base" data-aos="zoom-in">Serviços</h4>
     <h1 className="font-primary text-center text-black text-4xl lg:text-6xl max-w-[890px]" data-aos="zoom-in" data-aos-delay="200">Áreas de Atuação nas Quais Somos Especialistas para Te Auxiliar!</h1>
    </div>
      {servicesData[0]?.img && ( 
        <div className="absolute inset-0 -z-50">
          <Image
            className="w-full h-full object-cover"
            src={servicesData[0].img}
            width={2560}
            height={1400}
            alt="Background"
            priority
          />
        </div>
      )}
      <div className="max-w-[1440px] mx-auto p-8 lg:p-0">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="flip-up">
        {servicesData.filter(item => item.title).map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-[#E3E3E3] to-[#FFFFFF] p-8 lg:p-12 rounded-md overflow-hidden"
          >
            <article className="flex flex-col items-start gap-6">
              <h1 className="text-2xl text-black font-primary">{item.title}</h1>
              <p className="max-w-[264px] text-start font-light">{item.description}</p>
            </article>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[#F1D67D] to-[#D18400]" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
