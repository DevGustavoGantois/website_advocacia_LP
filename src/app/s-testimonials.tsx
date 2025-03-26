import { TestimonialsClients } from "./c-testimonials-clients";

export function HomeTestimonials() {
    return (
        <section id="testimonials" className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-20 lg:mt-40 overflow-x-hidden">
            <div className="flex items-center justify-center">
            <article className="flex flex-col items-start justify-center">
                <h4 className="text-sm lg:text-base text-[#9E7A5F] text-start font-primary" data-aos="fade-down">Depoimentos</h4>
                <h1 className="text-black text-4xl lg:text-6xl max-w-[900px] font-primary" data-aos="fade-down" data-aos-delay="200">
                Depoimentos que comprovam a nossa eficácia e satisfação dos nossos clientes!
                </h1>
            </article>
            </div>
            <main className="mt-10">
                <TestimonialsClients />
            </main>
        </section>
    )
}