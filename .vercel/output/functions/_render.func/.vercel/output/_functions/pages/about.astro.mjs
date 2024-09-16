/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_qQrcV-bM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mattbirch.co");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const headshot = "/images/headshot-tan-tee-2.jpg";
  const image1 = "/images/new-illustration.png";
  const image2 = "/images/teamwork.jpeg";
  const pageTitle = "About Matt Birch | Web Developer";
  const pageDescription = "Learn about Matt Birch's journey as a front-end web developer, his skills, and his approach to creating exceptional web experiences.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="horizontal-gradient-wrapper" data-astro-cid-kh7btl4r> <!-- About Section with Headshot --> <section class="py-16 sm:py-24 md:py-32 text-center" data-astro-cid-kh7btl4r> <h1 class="h1-text heading-text text-center mb-8 md:mb-12 fade-in" data-astro-cid-kh7btl4r> ${pageTitle} </h1> <div class="pt-8 sm:pt-16" data-astro-cid-kh7btl4r> <div class="inline-block rounded-full p-1 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl" style="min-width: 256px; min-height: 256px;" data-astro-cid-kh7btl4r> <img${addAttribute(headshot, "src")} alt="Matt Birch headshot" class="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-white dark:border-gray-800" width="256" height="256" loading="eager" data-astro-cid-kh7btl4r> </div> <!-- Enhanced Introduction Text --> <p class="text-lg sm:text-xl pt-8 sm:pt-16 pb-8 leading-relaxed max-w-2xl mx-auto text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <span class="font-bold italic text-blue-600 dark:text-blue-400" data-astro-cid-kh7btl4r>Hello!</span> <span class="font-medium" data-astro-cid-kh7btl4r> I'm Matt Birch, </span> <span class="italic" data-astro-cid-kh7btl4r>a passionate front-end web developer</span> with expertise
          in
<span class="font-semibold" data-astro-cid-kh7btl4r>HTML</span>, <span class="font-semibold" data-astro-cid-kh7btl4r>CSS</span>,
<span class="font-semibold" data-astro-cid-kh7btl4r>JavaScript</span>, <span class="font-semibold" data-astro-cid-kh7btl4r>Astro</span> and
<span class="font-semibold" data-astro-cid-kh7btl4r>React</span>.
</p> <!-- Styled Resume Download Button --> <div class="mt-8" data-astro-cid-kh7btl4r> <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-150 ease-in-out shadow-md hover:shadow-lg dark:shadow-blue-500/50" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-kh7btl4r></path> </svg>
Download My Resume
</a> </div> </div> </section> </div> <div class="horizontal-gradient-wrapper-2" data-astro-cid-kh7btl4r> <!-- Who I Am Section --> <section class="pb-16 sm:pb-24 md:pb-32 fade-in" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="md:grid md:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Text Column --> <div class="text-left mb-8 md:mb-0" data-astro-cid-kh7btl4r> <h2 class="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300" data-astro-cid-kh7btl4r>
Who I Am
</h2> <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r>
I'm someone who loves nature, coffee, and people. My unique
              journey has shaped me into a developer who prioritizes both
              quality work and human connection. I thrive on collaboration and
              building meaningful digital experiences.
</p> </div> <!-- Image Column --> <div data-astro-cid-kh7btl4r> <img${addAttribute(image1, "src")} alt="Illustration" class="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" data-astro-cid-kh7btl4r> </div> </div> </div> </section> <!-- What It's Like to Work With Me Section --> <section class="pb-16 sm:pb-24 md:pb-32" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="md:grid md:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Image Column (Now on the Left) --> <div class="mb-8 md:mb-0" data-astro-cid-kh7btl4r> <img${addAttribute(image2, "src")} alt="Teamwork Illustration" class="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" data-astro-cid-kh7btl4r> </div> <!-- Text Column (Now on the Right) --> <div class="text-left fade-in" data-astro-cid-kh7btl4r> <h2 class="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300" data-astro-cid-kh7btl4r>
What It's Like To Work With Me
</h2> <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r>
My approach emphasizes communication and collaboration. I ensure
              that every step of the project is transparent and efficient. I'm
              easy to work with and always strive to exceed expectations.
</p> <ul class="mt-6 space-y-2" data-astro-cid-kh7btl4r> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Clear communication
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Collaborative approach
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Attention to detail
</li> </ul> </div> </div> </div> </section> <!-- Combined CTA and Background Image Section  --> <section class="relative w-full bg-cover bg-center" style="background-image: url('/images/me_rocks.png'); height: 60vh;" data-astro-cid-kh7btl4r> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black opacity-70 dark:opacity-80" data-astro-cid-kh7btl4r></div> <!-- Text and Button Container --> <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r></div> <div class="py-10 px-16 text-center" data-astro-cid-kh7btl4r> <h2 class="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-gray-100 drop-shadow-lg" data-astro-cid-kh7btl4r>
You know where to find me.
</h2> </div> <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <!-- Flexbox for Icons and Button, now in column --> <div class="py-10 px-16 flex flex-col items-center justify-center space-y-6" data-astro-cid-kh7btl4r> <!-- Icons Container --> <div class="flex space-x-6" data-astro-cid-kh7btl4r> <!-- Twitter Icon (Left) --> <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" data-astro-cid-kh7btl4r> <i class="fab fa-twitter text-white text-2xl hover:text-sky-500 transition-colors duration-300" data-astro-cid-kh7btl4r></i> </a> <!-- GitHub Icon (Middle) --> <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" data-astro-cid-kh7btl4r> <i class="fab fa-github text-white text-2xl hover:text-gray-500 transition-colors duration-300" data-astro-cid-kh7btl4r></i> </a> <!-- LinkedIn Icon (Right) --> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" data-astro-cid-kh7btl4r> <i class="fab fa-linkedin text-white text-2xl hover:text-sky-500 transition-colors duration-300" data-astro-cid-kh7btl4r></i> </a> </div> <!-- Button under the icons --> <a href="/contact" class="inline-block text-white bg-sky-700 bg-opacity-20 border-2 border-sky-700 font-semibold rounded-full px-8 py-3 transition-colors duration-300 transform hover:bg-sky-700 hover:bg-opacity-40 shadow" data-astro-cid-kh7btl4r>
Let's Connect
</a> </div> </div> </section> <!-- Who I Am Section --> <section class="pb-16 sm:pb-24 md:pb-32 fade-in" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="md:grid md:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Text Column --> <div class="text-left mb-8 md:mb-0" data-astro-cid-kh7btl4r> <h2 class="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300" data-astro-cid-kh7btl4r>
Who I Am
</h2> <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r>
I'm someone who loves nature, coffee, and people. My unique
              journey has shaped me into a developer who prioritizes both
              quality work and human connection. I thrive on collaboration and
              building meaningful digital experiences.
</p> </div> <!-- Image Column --> <div data-astro-cid-kh7btl4r> <img${addAttribute(image1, "src")} alt="Illustration" class="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" data-astro-cid-kh7btl4r> </div> </div> </div> </section> <!-- What It's Like to Work With Me Section --> <section class="pb-16 sm:pb-24 md:pb-32" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="md:grid md:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Image Column (Now on the Left) --> <div class="mb-8 md:mb-0" data-astro-cid-kh7btl4r> <img${addAttribute(image2, "src")} alt="Teamwork Illustration" class="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" data-astro-cid-kh7btl4r> </div> <!-- Text Column (Now on the Right) --> <div class="text-left fade-in" data-astro-cid-kh7btl4r> <h2 class="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300" data-astro-cid-kh7btl4r>
What It's Like To Work With Me
</h2> <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r>
My approach emphasizes communication and collaboration. I ensure
              that every step of the project is transparent and efficient. I'm
              easy to work with and always strive to exceed expectations.
</p> <ul class="mt-6 space-y-2" data-astro-cid-kh7btl4r> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Clear communication
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Collaborative approach
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-kh7btl4r> <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg>
Attention to detail
</li> </ul> </div> </div> </div> </section> </div>   `, "head": ($$result2) => renderTemplate`<link rel="preload" as="image"${addAttribute(headshot, "href")}>` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
