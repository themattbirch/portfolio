/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_MaEFqbiu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_phRzp8g5.mjs';
import 'clsx';
import { $ as $$Image } from '../../chunks/_astro_assets_D2GOdnI1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://mattbirch.co");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Table of Contents"> <ul> ${headings.map((heading) => renderTemplate`<li class="text-xl mb-4 text-zinc-500"> <a${addAttribute(`#${heading.slug}`, "href")}>#${heading.text}</a> </li>`)} </ul> </nav>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/TableOfContents.astro", void 0);

const $$Astro$1 = createAstro("https://mattbirch.co");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Share;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-9 absolute top-2 -left-20"> <a${addAttribute(`https://twitter.com/intent/tweet?url=https://matbirch.co/blog/${post.slug}`, "href")}> <svg class="text-zinc-500" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.289 8.52345C17.289 3.91691 21.0223 0.182861 25.6267 0.182861C28.3296 0.182861 30.488 1.46145 31.9344 3.31694C33.4877 2.99913 34.9485 2.42436 36.2701 1.64022C35.7491 3.26929 34.6464 4.63894 33.2088 5.50569L33.2125 5.51411C34.6224 5.34297 35.9637 4.96806 37.2128 4.41457L37.2099 4.41907C36.3112 5.76489 35.1816 6.95297 33.8829 7.92091C33.9528 8.39126 33.9883 8.86473 33.9883 9.33545C33.9883 19.1656 26.4995 30.5989 12.7233 30.5989C8.50416 30.5989 4.57451 29.3627 1.2668 27.2405C0.647017 26.8429 0.466953 26.0181 0.864612 25.3984C0.899732 25.3435 0.938212 25.2923 0.979572 25.2443C1.21552 24.8539 1.66501 24.6157 2.14773 24.6725C4.58843 24.9603 7.02848 24.6627 9.17917 23.7232C7.04603 22.7824 5.39011 20.9593 4.67211 18.7193C4.54291 18.3163 4.6356 17.875 4.91603 17.5579C4.92576 17.5469 4.93565 17.5362 4.94571 17.5256C3.23709 16.0218 2.15928 13.8189 2.15928 11.3638V11.2736C2.15928 10.8484 2.38429 10.4549 2.7508 10.2393C2.87123 10.1685 3.00099 10.1203 3.13419 10.0949C2.54797 8.96412 2.21643 7.67958 2.21643 6.31889C2.21643 5.07108 2.22357 3.49846 3.10219 2.08217C3.29915 1.76467 3.62021 1.57107 3.96373 1.52521C4.46901 1.36633 5.04232 1.51918 5.39749 1.95473C8.30763 5.52337 12.5084 7.98889 17.2898 8.63897L17.289 8.52345ZM12.7233 27.9323C10.6237 27.9323 8.60749 27.5827 6.72661 26.9395C9.01365 26.5435 11.2082 25.6424 13.0991 24.1605C13.499 23.8472 13.6582 23.316 13.4967 22.8344C13.3352 22.3529 12.888 22.0252 12.3801 22.0162C10.5058 21.9831 8.84565 21.0591 7.80781 19.6492C8.31541 19.6082 8.81141 19.521 9.29187 19.3911C9.82941 19.2458 10.1963 18.7497 10.178 18.1932C10.1596 17.6366 9.76077 17.1658 9.2148 17.0562C7.13851 16.6394 5.46355 15.1137 4.83117 13.1246C5.3668 13.254 5.92272 13.3309 6.49285 13.3496C7.02835 13.3671 7.51056 13.0276 7.67453 12.5175C7.83848 12.0074 7.64443 11.4504 7.19901 11.1526C5.64061 10.1108 4.61643 8.33238 4.61643 6.31889C4.61643 5.87236 4.62272 5.47382 4.64947 5.11251C8.26973 8.79769 13.2233 11.1715 18.7357 11.449C19.1527 11.47 19.5554 11.2945 19.8239 10.9748C20.0923 10.655 20.1955 10.228 20.1027 9.82091C20.0068 9.40046 19.9556 8.96758 19.9556 8.52345C19.9556 5.38894 22.4958 2.84953 25.6267 2.84953C28.9181 2.84953 31.3216 5.89889 31.3216 9.33545C31.3216 18.0189 24.7205 27.9323 12.7233 27.9323Z" fill="currentColor"></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=https://mattbirch.co/blog/${post.slug}`, "href")}> <svg class="text-zinc-500" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33317 0.666626C1.86042 0.666626 0.666504 1.86055 0.666504 3.33329V32.6666C0.666504 34.1394 1.86042 35.3333 3.33317 35.3333H32.6665C34.1393 35.3333 35.3332 34.1394 35.3332 32.6666V3.33329C35.3332 1.86055 34.1393 0.666626 32.6665 0.666626H3.33317ZM6.13317 14H11.1998V30H6.13317V14ZM11.5332 8.67996C11.5332 10.2632 10.2497 11.5466 8.6665 11.5466C7.0833 11.5466 5.79984 10.2632 5.79984 8.67996C5.79984 7.09673 7.0833 5.81329 8.6665 5.81329C10.2497 5.81329 11.5332 7.09673 11.5332 8.67996ZM29.9998 20.2856C29.9998 15.4722 26.8889 13.6008 23.7985 13.6008C22.7866 13.551 21.7791 13.7631 20.8765 14.2161C20.1911 14.5601 19.4736 15.3472 18.9203 16.716H18.7779V14.0011H13.9998V30.0125H19.0829V21.4965C19.0094 20.6243 19.2886 19.4971 19.8596 18.8263C20.4307 18.1555 21.2475 17.9953 21.8669 17.9139H22.0601C23.6765 17.9139 24.8761 18.9147 24.8761 21.4364V30.0125H29.959L29.9998 20.2856Z" fill="currentColor"></path> </svg> </a> </div>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Share.astro", void 0);

const $$Astro = createAstro("https://mattbirch.co");
const getStaticPaths = async () => {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description, "ogImage": post.data.image.src, "image": post.data.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-screen-2xl mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"> <div class="max-w-screen-xl mx-auto"> <article> <nav> <a href="/blog" class="text-zinc-500 text-2xl mb-16 underline block">
--> Back to all blogs
</a> </nav> <header> <h1 class="h1-text heading-text text-center mb-8 md:mb-12"> ${post.data.title} </h1> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 1024, "height": 1024 / 1.5, "class": "rounded-2xl shadow-xl mb-28 aspect-thumbnail object-cover", "loading": "lazy" })} </header> <div class="flex flex-col md:flex-row gap-8"> <div class="md:w-3/4 prose-2xl dark:text-darkModeText overflow-visible relative"> ${renderComponent($$result2, "Content", Content, {})} </div> <aside class="md:w-1/4"> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })} ${renderComponent($$result2, "Share", $$Share, { "post": post })} </aside> </div> </article> </div> </section> ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
