/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { $ as $$SkillsComponent } from '../../chunks/SkillsComponent_BmvwgGmq.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CIcsmlPM.mjs';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$TechnicalSkills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      name: "HTML",
      description: "Proficient in creating structured, semantic markup for web pages.",
      icon: "\u{1F5A5}\uFE0F",
      level: "Beginner"
    },
    {
      name: "CSS",
      description: "Skilled in creating interactive web experiences and manipulating the DOM.",
      icon: "\u2699\uFE0F",
      level: "Skill"
    },
    {
      name: "JavaScript",
      description: "Text coming.",
      icon: "\u{1F5A5}\uFE0F",
      level: "Advanced"
    },
    {
      name: "React",
      description: "Update coming.",
      icon: "\u2699\uFE0F",
      level: "Dumb"
    }
  ];
  const half = Math.ceil(skills.length / 2);
  const skillsPart1 = skills.slice(0, half);
  const skillsPart2 = skills.slice(half);
  const pageTitle = "Technical Skills I've Learned";
  const pageDescription = "The technical skills I possess.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-5uzkpaog": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="horizontal-gradient-wrapper-1" data-astro-cid-5uzkpaog> <!-- Introduction Text Section --> <section class="text-center mx-auto py-16 sm:py-24 md:py-32" data-astro-cid-5uzkpaog> <div class="max-w-screen mx-auto" data-astro-cid-5uzkpaog> <h1 class="h1-text heading-text text-center mb-8 md:mb-12 fade-in" data-astro-cid-5uzkpaog> ${pageTitle} </h1> <p class="text-lg" data-astro-cid-5uzkpaog>
Understanding and refining these soft skills is crucial for
          professional growth, fostering strong team dynamics, and ensuring
          project success.
</p> </div> </section> </div> <div class="horizontal-gradient-wrapper-2" data-astro-cid-5uzkpaog> <!-- SkillsComponent with Split Part 1 --> <section class="pb-16 sm:pb-24 md:pb-32 fade-in" data-astro-cid-5uzkpaog> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5uzkpaog> <h2 class="h2-text heading-text font-bold text-center mb-8 sm:mb-16" data-astro-cid-5uzkpaog>
Knowledgeable in
</h2> ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, { "skills": skillsPart1, "data-astro-cid-5uzkpaog": true })} </div> </section> <!-- SkillsComponent with Split Part 2 --> <section data-astro-cid-5uzkpaog> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5uzkpaog> <h2 class="h2-text heading-text font-bold text-center mb-8 sm:mb-16" data-astro-cid-5uzkpaog></h2><h2 class="h2-text heading-text font-bold text-center mb-8 sm:mb-16" data-astro-cid-5uzkpaog>
More skills I possess
</h2> ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, { "skills": skillsPart2, "data-astro-cid-5uzkpaog": true })} </div> </section> </div> <div class="horizontal-gradient-wrapper-3" data-astro-cid-5uzkpaog> <section class="text-center mx-auto py-16 sm:py-24 md:py-32 dark:text-white" data-astro-cid-5uzkpaog> <div class="max-w-5xl mx-auto" data-astro-cid-5uzkpaog> <h2 class="h2-text heading-text text-center mb-8 md:mb-12" data-astro-cid-5uzkpaog>
Also familiar with...
</h2> <p class="text-lg" data-astro-cid-5uzkpaog>
WordPress, libraries (NextJS, Node), And don't forget about my writing
          skills. I'm an excellent copywriter. It's possible you've read some of
          my work on LinkedIn, Twitter or a popular blog. Clients hire me to
          ghostwrite for them.
</p> </div> </section> </div>   ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/skills/technical-skills.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/skills/technical-skills.astro";
const $$url = "/skills/technical-skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechnicalSkills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
