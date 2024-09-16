import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_fjAbV7n_.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
export { renderers } from '../renderers.mjs';

const parser = new MarkdownIt();
async function get(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Matt Birch - Web Developer",
    description: `Transforming ideas into powerful web experiences.
        I combine technical expertise with creative problem-solving to deliver 
        websites that not only look great but perform exceptionally.`,
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}`,
      pubDate: new Date(post.data.date),
      content: sanitizeHtml(parser.render(post.body)),
      image: post.data.image
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
