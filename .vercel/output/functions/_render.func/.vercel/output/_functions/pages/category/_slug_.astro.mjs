/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_U_3YCS-x.mjs';
import { $ as $$CategoryList, a as $$Pagination, b as $$PostList } from '../../chunks/CategoryList_6Iv0Qh67.mjs';
import { $ as $$Layout } from '../../chunks/Layout_phRzp8g5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mattbirch.co");
const getStaticPaths = async () => {
  const posts = await getCollection("posts");
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  const paths = categories.map((category) => {
    const postsByCategory = posts.filter(
      (post) => post.data.categories.includes(category)
    );
    return {
      params: {
        slug: category
      },
      props: {
        category,
        posts: postsByCategory
      }
    };
  });
  return paths;
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category, posts } = Astro2.props;
  const pageTitle = "Matt Birch | Web Developer";
  const pageDescription = "Transforming ideas into powerful web experiences. I combine technical expertise with creative problem-solving to deliver websites that not only look great but perform exceptionally.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} - ${category} Posts` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-screen-2xl mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"> <div class="max-w-screen-xl mx-auto"> <a href="/blog" class="text-zinc-500 text-2xl mb-16 underline block">
←Back to all blogs
</a> <h1 class="h1-text heading-text text-center mb-8 md:mb-12"> ${pageTitle} </h1> <p class="dark:text-darkModeText text-2xl mb-24 max-sm:mb-14"> ${pageDescription} </p> ${renderComponent($$result2, "CategoryList", $$CategoryList, { "categories": [category], "title": "Posts tagged" })} <div class="mb-12 flex justify-end"> ${renderComponent($$result2, "Pagination", $$Pagination, { "nextURL": "/blog/2" })} </div> ${renderComponent($$result2, "PostList", $$PostList, { "posts": posts })} <div class="mb-36 flex justify-end"> ${renderComponent($$result2, "Pagination", $$Pagination, { "nextURL": "/blog/2" })} </div> </div> </section> ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/category/[slug].astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/category/[slug].astro";
const $$url = "/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
