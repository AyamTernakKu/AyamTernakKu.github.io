import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { navbar } from "../../components/navbar/navbar.js";
import { url } from "../../helpers/urlConfig.js";
import slide from "./partner/slide.js";
// import testimonial from "./testimonials/testimonials.js"

export async function main() {
  const promises = [
    loadComponent("header.navbar", url.components.navbar + "navbar.html"),
    loadComponent(".home .hero", url.pages.home + "hero/hero.html"),
    loadComponent(".home .section", url.pages.home + "section/section.html"),
    loadComponent(".home .partner", url.pages.home + "partner/partner.html"),
    loadComponent(".home .about", url.pages.home + "about/about.html"),
    loadComponent(".home .testimonials", url.pages.home + "testimonials/testimonials.html"),
    loadComponent(".home .team", url.pages.home + "team/team.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      slide();
      // testimonial();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
