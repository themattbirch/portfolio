import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D2GOdnI1.mjs';
import 'clsx';
/* empty css                        */

const $$Astro$4 = createAstro("https://mattbirch.co");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  const postUrl = "/blog/" + post.slug;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(postUrl, "href")}${addAttribute(`Read more about ${post.data.title}`, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 600, "height": 600 / 1.5, "class": "rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover", "loading": "lazy" })} </a> <h2 class="h2-text dark:text-darkModeText text-4xl mb-4 font-semibold"> <a${addAttribute(postUrl, "href")}>${post.data.title}</a> </h2> <p class="dark:text-darkModeText text-2xl mb-9 line-clamp-2"> ${post.body.slice(0, 200)}...
</p> </article>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Post.astro", void 0);

const $$Astro$3 = createAstro("https://mattbirch.co");
const $$PostList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-32 max-md:grid-cols-1 max-sm:gap-y-14"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)} </div>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/PostList.astro", void 0);

const $$Astro$2 = createAstro("https://mattbirch.co");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevURL, nextURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between"> ${prevURL ? renderTemplate`<a${addAttribute(prevURL, "href")} class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Previous
</a>` : renderTemplate`<div></div>`} ${nextURL ? renderTemplate`<a${addAttribute(nextURL, "href")} class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Next
</a>` : renderTemplate`<div></div>`} </div>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://mattbirch.co");
const $$Category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Category;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/category/${category}`, "href")} class="dark:text-darkModeText text-teal-900 rounded-3xl p-2 uppercase text-xl border-2 border-teal-900
    whitespace-nowrap" data-astro-cid-acbv6hgm> ${category} </a> `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Category.astro", void 0);

const $$Astro = createAstro("https://mattbirch.co");
const $$CategoryList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryList;
  const { categories, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-[auto,1fr] gap-x-14 gap-y-3 mb-16 max-lg:grid-cols-1" data-astro-cid-keqm3jkg> ${title && renderTemplate`<h2 class="dark:text-darkModeText font-bold h2-text" data-astro-cid-keqm3jkg>${title}</h2>`} <div class="flex gap-4 flex-wrap items-center" data-astro-cid-keqm3jkg> ${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "category": category, "data-astro-cid-keqm3jkg": true })}`)} </div> </div> `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/CategoryList.astro", void 0);

export { $$CategoryList as $, $$Pagination as a, $$PostList as b };
