import { Instagram, Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

export function NavbarMobile() {
    return (
        <nav className="z-50 fixed top-0 left-0 w-full">
            <div className="flex items-center justify-between px-4 py-6 backdrop-blur-3xl border-b border-white/20">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="text-[#9E7A5F] cursor-pointer" size={30} />
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-gradient-to-b from-[#9E7A5F] to-[#563F2E] text-white flex flex-col items-center py-10">
                        <DialogTitle className="mb-6">
                            <Image src="/LogoPrimary.svg" width={250} height={100} alt="Logo" />
                        </DialogTitle>
                        <ul className="flex flex-col items-center gap-6 text-lg font-normal">
                            {[
                                { href: "#home", label: "Home" },
                                { href: "#about", label: "Sobre mim" },
                                { href: "#services", label: "Áreas de atuação" },
                                { href: "#faq", label: "Perguntas Frequentes" },
                                { href: "#testimonials", label: "Depoimentos" },
                                { href: "#articles", label: "Artigos" },
                                { href: "#contact", label: "Contato" },
                            ].map(({ href, label }) => (
                                <li key={href} className="transition-all duration-300 ease-in-out hover:border-b-2 hover:border-white hover:scale-105">
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                        <span className="flex items-center gap-6 mt-6">
                            <Link href="https://www.instagram.com/adv_milaoliver/" target="_blank">
                                <Instagram size={24} className="hover:scale-110 transition-all duration-300" />
                            </Link>
                            <Link href="https://wa.me/5571997079191" target="_blank">
                                <MessageCircle size={24} className="hover:scale-110 transition-all duration-300" />
                            </Link>
                        </span>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
