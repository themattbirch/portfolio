/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_--6x6Q5Z.mjs';
import { $ as $$Layout } from '../chunks/Layout_qQrcV-bM.mjs';
import { $ as $$CategoryList, b as $$PostList, a as $$Pagination } from '../chunks/CategoryList_6Iv0Qh67.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).slice(0, 6);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  const pageTitle = "Matt Birch's Web Development Blog";
  const blogDescription = "Transforming ideas into powerful web experiences. I combine technical expertise with creative problem-solving to deliver websites that not only look great but perform exceptionally.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": blogDescription, "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="horizontal-gradient-wrapper" data-astro-cid-ijnerlr2> <section class="max-w-screen-2xl mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8" data-astro-cid-ijnerlr2> <div class="max-w-screen-xl mx-auto" data-astro-cid-ijnerlr2> <!-- Added container for content alignment --> <header class="text-center mb-12" data-astro-cid-ijnerlr2> <h1 class="h1-text heading-text text-center mb-8 md:mb-12" data-astro-cid-ijnerlr2> ${pageTitle} </h1> <p class="dark:text-darkModeText text-xl mb-12" data-astro-cid-ijnerlr2> ${blogDescription} </p> </header> ${renderComponent($$result2, "CategoryList", $$CategoryList, { "categories": categories, "title": "Tags", "data-astro-cid-ijnerlr2": true })} ${renderComponent($$result2, "PostList", $$PostList, { "posts": posts, "data-astro-cid-ijnerlr2": true })} <div class="mt-12 flex justify-end" data-astro-cid-ijnerlr2> <!-- Added flex container for pagination --> ${renderComponent($$result2, "Pagination", $$Pagination, { "nextURL": "/blog/2", "data-astro-cid-ijnerlr2": true })} </div> </div> </section> </div> ` })} `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
