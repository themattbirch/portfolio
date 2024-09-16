import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro = createAstro("https://mattbirch.co");
const $$SkillsComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsComponent;
  const { skills, split = false } = Astro2.props;
  const half = Math.ceil(skills.length / 2);
  const skillsPart1 = split ? skills.slice(0, half) : skills;
  const skillsPart2 = split ? skills.slice(half) : [];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-3sxe5fin> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3sxe5fin> <div class="grid grid-cols-1 sm:grid-cols-2 gap-16" data-astro-cid-3sxe5fin> ${skillsPart1.map((skill, index) => renderTemplate`<div class="skill-card bg-white dark:bg-gray-800 rounded-lg shadow-md border border-transparent dark:border-gray-700 mb-4 sm:mb-6" data-astro-cid-3sxe5fin> <button class="skill-header w-full text-left flex justify-between items-center p-4 sm:p-6"${addAttribute(index, "data-skill-toggle")} data-astro-cid-3sxe5fin> <div class="flex items-center" data-astro-cid-3sxe5fin> <div class="icon-wrapper mr-3" data-astro-cid-3sxe5fin> <span class="icon text-4xl" data-astro-cid-3sxe5fin>${skill.icon}</span> </div> <div class="text-lg font-semibold text-gray-700 dark:text-gray-200" data-astro-cid-3sxe5fin> ${skill.name} </div> </div> <span class="toggle-icon text-xl text-gray-500 dark:text-gray-200" data-astro-cid-3sxe5fin>
▼
</span> </button> <div class="skill-content hidden" data-astro-cid-3sxe5fin> <div class="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-b-lg" data-astro-cid-3sxe5fin> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-3sxe5fin> ${skill.description} </p> <div class="button-wrapper mt-4" data-astro-cid-3sxe5fin> <button class="skill-level-btn" data-astro-cid-3sxe5fin>${skill.level}</button> </div> </div> </div> </div>`)} </div> <!-- Conditionally render the second half of skills if split is true --> ${split && skillsPart2.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-8" data-astro-cid-3sxe5fin> ${skillsPart2.map((skill, index) => renderTemplate`<div class="skill-card bg-white dark:bg-gray-800 rounded-lg shadow-md border border-transparent dark:border-gray-700" data-astro-cid-3sxe5fin> <button class="skill-header w-full text-left p-4 flex justify-between items-center"${addAttribute(index + half, "data-skill-toggle")} data-astro-cid-3sxe5fin> <div class="flex items-center" data-astro-cid-3sxe5fin> <div class="icon-wrapper mr-3" data-astro-cid-3sxe5fin> <span class="icon text-4xl" data-astro-cid-3sxe5fin>${skill.icon}</span> </div> <div class="text-lg font-semibold text-gray-700 dark:text-gray-200" data-astro-cid-3sxe5fin> ${skill.name} </div> </div> <span class="toggle-icon text-xl text-gray-500 dark:text-gray-200" data-astro-cid-3sxe5fin>
▼
</span> </button> <div class="skill-content hidden" data-astro-cid-3sxe5fin> <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg" data-astro-cid-3sxe5fin> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-3sxe5fin> ${skill.description} </p> <div class="button-wrapper mt-4" data-astro-cid-3sxe5fin> <button class="skill-level-btn" data-astro-cid-3sxe5fin>${skill.level}</button> </div> </div> </div> </div>`)} </div>`} </div> </section>  `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/SkillsComponent.astro", void 0);

export { $$SkillsComponent as $ };
