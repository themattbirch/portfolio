/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly BASE_URL: string;
  // Add any other environment variables you're using
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add this to ensure Astro recognizes Tailwind classes
declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

// Declare the Tailwind CSS module
declare module '*.css' {
  const styles: any;
  export default styles;
}