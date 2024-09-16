/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_o7j8RNAz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VL9LN_d4.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mattbirch.co");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, imageSrc, category, keyFeatures, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl max-w-7xl mx-auto transition-all duration-300 hover:scale-105" data-astro-cid-mspuyifq> <div class="flex flex-col md:flex-row md:h-[450px]" data-astro-cid-mspuyifq> <img class="w-full md:w-3/5 h-64 md:h-full object-cover transition-transform duration-300"${addAttribute(imageSrc, "src")}${addAttribute(title, "alt")} data-astro-cid-mspuyifq> <div class="p-8 md:w-2/5 flex flex-col items-center justify-center text-center h-full space-y-6" data-astro-cid-mspuyifq> <span class="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm" data-astro-cid-mspuyifq> ${category} </span> <h2 class="font-serif text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300" data-astro-cid-mspuyifq> ${title} </h2> <p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-mspuyifq> ${description} </p> <div data-astro-cid-mspuyifq> <span class="font-bold text-gray-700 dark:text-gray-200 block mb-2" data-astro-cid-mspuyifq>Key Features:</span> <div class="flex flex-wrap justify-center gap-3" data-astro-cid-mspuyifq> ${keyFeatures.map((feature) => renderTemplate`<span class="feature-tag bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-all duration-300" data-astro-cid-mspuyifq> ${feature} </span>`)} </div> </div> <div class="space" data-astro-cid-mspuyifq></div> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-mspuyifq> <button class="view-project-btn bg-blue-800 dark:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300" data-astro-cid-mspuyifq>
Visit Site
</button> </a> </div> </div>  </div>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Florida Grade & Pave",
      description: "A paving company that handles both residential and commercial needs.",
      imageSrc: "/images/florida-grade-and-pave.png",
      category: "Asphalt Paving",
      keyFeatures: ["Landing Page", "Services", "Book Directly"],
      link: "https://floridagradeandpave.com/"
    },
    {
      title: "Active Care Clinic",
      description: "A well-known chiropractic and acupuncture clinic.",
      imageSrc: "/images/active-care-clinic.png",
      category: "Chiropractor",
      keyFeatures: [
        "Live Support",
        "Mission Statement",
        "Google Maps Integration"
      ],
      link: "https://activecareclinic.com/"
    },
    {
      title: "The Packers Post",
      description: "A Green Bay Packers-focused sports blog.",
      imageSrc: "/images/the-packers-post.png",
      category: "Blog",
      keyFeatures: ["RSS Feed", "Blog Template", "Metadata"],
      link: "https://thepackerspost.com/"
    },
    {
      title: "Prestige Academia",
      description: "An online academy that teaches English in Latin America.",
      imageSrc: "images/prestige-academia.png",
      category: "Education",
      keyFeatures: ["Language Translator", "Registration Form", "Brochure"],
      link: "https://prestigeacademia.com/"
    },
    {
      title: "William Kerrigan Painting",
      description: "A locally-owned painting company.",
      imageSrc: "images/william-kerrigan-painting.png",
      category: "House Painting",
      keyFeatures: ["Testimonials", "Services", "Bio"],
      link: "https://williamkpainting.com/"
    },
    {
      title: "Lynch's Landing",
      description: "Popular hospitality business located in Florida.",
      imageSrc: "/images/lynchs-landing-rv-park.png",
      category: "RV Park",
      keyFeatures: ["Brochure", "Contact Form", "Live Cam"],
      link: "https://lynchslandingrvpark.com/"
    }
  ];
  const pageTitle = "My Projects";
  const pageDescription = "All about my portfolio of work.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="horizontal-gradient-wrapper-1" data-astro-cid-aid3sr62> <section class="text-center mx-auto py-16 sm:py-24 md:py-32 px-8 sm:px-10 md:px-12" data-astro-cid-aid3sr62> <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-aid3sr62> <h1 class="h1-text heading-text text-center mb-8 md:mb-12 fade-in" data-astro-cid-aid3sr62> ${pageTitle} </h1> <p class="text-lg text-gray-600 dark:text-gray-300" data-astro-cid-aid3sr62>
Understanding and refining these soft skills is crucial for
          professional growth, fostering strong team dynamics, and ensuring
          project success.
</p> </div> </section> </div> <div class="horizontal-gradient-wrapper-2" data-astro-cid-aid3sr62> <section class="projects-section" data-astro-cid-aid3sr62> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in" data-astro-cid-aid3sr62> <div class="text-center mb-16 sm:mb-24 md:mb-32" data-astro-cid-aid3sr62> <h2 class="h2-text heading-text inline-block" data-astro-cid-aid3sr62>
Here are just a few projects I've built.
</h2> <div class="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto mt-4" data-astro-cid-aid3sr62></div> </div> <div class="space-y-16 md:space-y-24" data-astro-cid-aid3sr62> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "description": project.description, "imageSrc": project.imageSrc, "category": project.category, "keyFeatures": project.keyFeatures, "link": project.link, "data-astro-cid-aid3sr62": true })}`)} </div> </div> </section> </div> <div class="horizontal-gradient-wrapper-3" data-astro-cid-aid3sr62> <section class="call-to-action py-16 sm:py-24 md:py-32" data-astro-cid-aid3sr62> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-aid3sr62> <h2 class="h2-text heading-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" data-astro-cid-aid3sr62>
Ready for me to bring your next project to life?
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto" data-astro-cid-aid3sr62>
I'm here, eager to help you turn your vision into reality. Let's
          create something amazing together!
</p> <div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-aid3sr62> <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300" data-astro-cid-aid3sr62>
Get In Touch
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-aid3sr62> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-aid3sr62></path> </svg> </a> <a href="#projects" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300" data-astro-cid-aid3sr62>
Learn More About My Skills
</a> </div> </div> </section> </div> ` })}  `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
