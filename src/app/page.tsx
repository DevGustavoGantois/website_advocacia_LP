"use client";
import { HomeAboutMe } from "./s-about-me";
import { HomeArticles } from "./s-articles";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";
import { HomeTestimonials } from "./s-testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
    <HomeHero />
    <HomeAboutMe />
    <HomeServices />
    <HomeFAQ />
    <HomeTestimonials />
    <HomeArticles />
    <HomeContact />
    </>
  );
}
