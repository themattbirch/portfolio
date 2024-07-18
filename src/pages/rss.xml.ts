import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"
import MarkdownIt from "markdown-it"
import type { APIContext } from "astro"

const parser = new MarkdownIt();

export async function get(context: APIContext) {
    const posts = await getCollection("posts")
    return rss({
        title: "Matt Birch - Web Developer",
        description: `Transforming ideas into powerful web experiences.
        I combine technical expertise with creative problem-solving to deliver 
        websites that not only look great but perform exceptionally.`,
        site: context.site?.toString() ?? "",
        items: posts.map(post => ({
            title: post.data.title,
            link: `/blog/${post.slug}`,
            pubDate: new Date(post.data.date),
            content: sanitizeHtml(parser.render(post.body)),
            image: post.data.image,
        })),
    })
}