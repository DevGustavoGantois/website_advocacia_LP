import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "./global/footer";
import { Navbar } from "./global/navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const playFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Camila Oliveira | Advocacia Especializada",
  description: "Assessoria jurídica de excelência em diversas áreas do direito, oferecendo soluções estratégicas e personalizadas para cada cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="google-site-verification" content="jqpzsiIFqSK1AMJwyWUX6H2Y20i5u2oTwG5jFmIDUXY" />
      </head>
      <body
        className={`${montserrat.variable} ${playFairDisplay.variable} antialiased bg-gradient-to-r from-[#F5F5F5] to-[#F2EEEB]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
