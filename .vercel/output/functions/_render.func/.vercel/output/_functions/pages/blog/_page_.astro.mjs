/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_MaEFqbiu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_phRzp8g5.mjs';
import { $ as $$CategoryList, a as $$Pagination, b as $$PostList } from '../../chunks/CategoryList_6Iv0Qh67.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mattbirch.co");
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("posts");
  return paginate(allPosts, { pageSize: 6 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const posts = page.data;
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  const pageTitle = "Matt Birch's Web Development Blog";
  const blogDescription = "Transforming ideas into powerful web experiences. I combine technical expertise with creative problem-solving to deliver websites that not only look great but perform exceptionally.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": blogDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-screen-2xl mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"> <div class="max-w-screen-xl mx-auto"> <header class="text-center mb-12"> <h1 class="h1-text heading-text text-center mb-8 md:mb-12"> ${pageTitle} </h1> <p class="dark:text-darkModeText text-xl mb-12"> ${blogDescription} </p> </header> ${renderComponent($$result2, "CategoryList", $$CategoryList, { "categories": categories, "title": "Tags" })} <div class="my-12 flex justify-end"> ${renderComponent($$result2, "Pagination", $$Pagination, { "prevURL": page.url.prev, "nextURL": page.url.next })} </div> ${renderComponent($$result2, "PostList", $$PostList, { "posts": posts })} <div class="mt-12 flex justify-end"> ${renderComponent($$result2, "Pagination", $$Pagination, { "prevURL": page.url.prev, "nextURL": page.url.next })} </div> </div> </section> ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog/[page].astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
