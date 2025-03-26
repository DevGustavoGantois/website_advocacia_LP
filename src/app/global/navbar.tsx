import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";
import Image from "next/image";
import { Instagram, MessageCircleIcon } from "lucide-react";

export function Navbar() {
    return (
        <header className="max-w-[1440px] mx-auto p-8 lg:p-0 z-50">
            <nav className="hidden xl:flex items-center justify-around -mt-10">
                <figure className="mt-16">
                    <Image src="/LogoPrimary.svg" width={250} height={100} alt="" />
                </figure>
                <ul className="flex items-center gap-6"> 
                    <li className="text-white transition-all dura5ion-300 hover:border-b-3 hover:border- hover:scale-[1.1] mb-2">
                        <Link href="#home">
                        Home
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#about">
                        Sobre mim
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#services">
                        Áreas de atuação
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#faq">
                        Perguntas Frequentes
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#testimonials">
                        Depoimentos
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#articles">
                        Artigos
                        </Link>
                    </li>
                    <li className="text-white transition-all duration-500 hover:border-b-3 hover:border-white hover:scale-[1.1] mb-2">
                        <Link href="#contact">
                        Contato
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-4 text-white">
                 <Link href="https://www.instagram.com/adv_milaoliver/" target="_blank">
                 <Instagram size={20} />
                 </Link>
                 <Link href="https://wa.me/5571997079191" target="_blank">
                 <MessageCircleIcon size={20} />
                 </Link>
                </div>
            </nav>
            <div className="mt-4 flex xl:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
}