/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { $ as $$SkillsComponent } from '../../chunks/SkillsComponent_BmvwgGmq.mjs';
import { $ as $$Layout } from '../../chunks/Layout_qQrcV-bM.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$SoftSkills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      name: "Empathy",
      description: "Proficient in creating structured, semantic markup for web pages.",
      icon: "\u{1F5A5}\uFE0F",
      level: "Beginner"
    },
    {
      name: "Awareness",
      description: "Skilled in creating interactive web experiences and manipulating the DOM.",
      icon: "\u2699\uFE0F",
      level: "Skill"
    },
    {
      name: "Communication",
      description: "Excellent communication skills, both written and verbal.",
      icon: "\u{1F4AC}",
      level: "Expert"
    },
    {
      name: "Teamwork",
      description: "Strong ability to work in collaborative environments.",
      icon: "\u{1F91D}",
      level: "Advanced"
    }
    // Add more skills as needed
  ];
  const half = Math.ceil(skills.length / 2);
  const skillsPart1 = skills.slice(0, half);
  const skillsPart2 = skills.slice(half);
  const pageTitle = "Emotional Quotient Skills I've Built";
  const pageDescription = "The emotional quotient sklills I've built.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-v5kimylw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="horizontal-gradient-wrapper-1" data-astro-cid-v5kimylw> <!-- Introduction Text Section --> <section class="text-center mx-auto py-16 sm:py-24 md:py-32" data-astro-cid-v5kimylw> <div class="max-w-screen mx-auto" data-astro-cid-v5kimylw> <h1 class="h1-text heading-text text-center mb-8 md:mb-12 fade-in" data-astro-cid-v5kimylw> ${pageTitle} </h1> <p class="text-lg" data-astro-cid-v5kimylw>
Understanding and refining these soft skills is crucial for
          professional growth, fostering strong team dynamics, and ensuring
          project success.
</p> </div> </section> </div> <div class="horizontal-gradient-wrapper-2" data-astro-cid-v5kimylw> <!-- SkillsComponent with Split Part 1 --> <section class="pb-16 sm:pb-24 md:pb-32 fade-in" data-astro-cid-v5kimylw> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-v5kimylw> <h2 class="h2-text heading-text font-bold text-center mb-8 sm:mb-16" data-astro-cid-v5kimylw>
A few soft skills I've developed
</h2> ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, { "skills": skillsPart1, "data-astro-cid-v5kimylw": true })} </div> </section> <!-- SkillsComponent with Split Part 2 --> <section class="pb-16 sm:pb-24 md:pb-32" data-astro-cid-v5kimylw> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-v5kimylw> <h2 class="h2-text heading-text font-bold text-center mb-8 sm:mb-16" data-astro-cid-v5kimylw>
...A few more.
</h2> ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, { "skills": skillsPart2, "data-astro-cid-v5kimylw": true })} </div> </section> </div>   ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/skills/soft-skills.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/skills/soft-skills.astro";
const $$url = "/skills/soft-skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SoftSkills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
