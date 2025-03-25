import { HomeAboutMe } from "./s-about-me";
import { HomeArticles } from "./s-articles";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";
import { HomeTestimonials } from "./s-testimonials";


export default function Page() {
  return (
    <>
    <HomeHero />
    <HomeAboutMe />
    <HomeServices />
    <HomeFAQ />
    <HomeTestimonials />
    <HomeArticles />
    <HomeContact />
    <div className="h-[3000px]"></div>
    </>
  );
}
