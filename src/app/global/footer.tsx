import { Instagram, Mail, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer  className="max-w-[1440px] mx-auto bg-gradient-to-r from-[#9E7A5F] to-[#563F2E] rounded-t-2xl rounded-b-0 py-12 px-8 lg:px-16 mt-40">
            <div className="p-8 flex flex-col items-center lg:flex-row gap-8 lg:items-start justify-between">
                <figure className="lg:-mt-30">
                    <Image src="/LogoSecondary.svg" width={300} height={300} alt="" />
                </figure>
                <div className="flex flex-col items-start">
                    <h1 className="text-white font-primary text-4xl">Fale Comigo</h1>
                    <ul className="mt-4 flex items-center lg:items-start flex-col gap-4">
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <a href="mailto:milaoliver.adv@gmail.com" target="_blank">
                            Email: milaoliver.adv@gmail.com
                            </a>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="https://wa.me/5571997079191" target="_blank">
                            Telefone: +55 (71)99707-9191
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="https://www.instagram.com/adv_milaoliver/" target="_blank">
                            Instagram: @adv_milaoliver
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
                    <h1 className="text-white font-primary text-4xl">Links</h1>
                    <ul className="mt-4 flex items-center lg:items-start flex-col gap-4">
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#home">
                            Home
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#about">
                            Sobre mim
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#services">
                            Áreas de Atuação
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#faq">
                            Perguntas Frequentes
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#testimonials">
                            Depoimentos
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#articles">
                            Artigos
                            </Link>
                        </li>
                        <li className="text-white transition-all text-sm lg:text-base duration-700 hover:-translate-y-2">
                            <Link href="#contact">
                            Contato
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-white font-primary text-4xl mb-4">Social</h1>
                    <div className="flex items-center gap-2">
                        <Link className="text-white transition-all duration-700 hover:scale-[1.1]" href="https://www.instagram.com/adv_milaoliver/" target="_blank">
                        <Instagram size={20} />
                        </Link>
                        <Link className="text-white transition-all duration-700 hover:scale-[1.1]" href="https://wa.me/5571997079191" target="_blank">
                        <MessageCircleIcon size={20} />
                        </Link>
                        <a className="text-white transition-all duration-700 hover:scale-[1.1]" href="mailto:milaoliver.adv@gmail.com">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between border-t-1 border-white w-full mt-6">
              <p className="text-white font-light text-center lg:text-start text-sm lg:text-base -mb-6 mt-6">@2025 Todos os Diretos Reservados. Camila Oliveira Advocacia</p>
              <Link className="text-white font-light text-sm lg:text-base -mb-6 mt-6" href="https://www.instagram.com/devgustavogantois_/" target="_blank">
              desenvolvido por @devgustavogantois_
              </Link>
            </div>
        </footer>
    )
}