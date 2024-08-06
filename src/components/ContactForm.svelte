<script lang="ts">
  import { onMount } from "svelte";
  import kwesforms from "kwesforms";

  onMount(() => {
    (kwesforms as any).init();
  });
</script>

<form
  method="POST"
  action="https://kwesforms.com/api/f/J4cZUcPjZqE1xfJ662no"
  class="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6 border border-gray-200"
  data-kw-validate-on-change="false"
  data-kw-validate-on-blur="false"
  data-kw-show-errors-on="submit"
>
  <div>
    <label for="comment" class="block text-teal-900 text-xl font-semibold mb-2">
      Drop Matt a line. Any questions or feedback is welcomed!
    </label>
    <textarea
      rows="5"
      name="comment"
      id="comment"
      class="w-full border-2 border-teal-600 rounded-lg text-lg px-4 py-2 focus:outline-none focus:border-teal-500 transition-colors"
      placeholder="Your message here..."
      data-kw-rules="required"
      data-kw-max-length="255"
    ></textarea>
  </div>
  <div class="flex justify-end">
    <button
      type="submit"
      class="bg-teal-600 text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
    >
      Send
    </button>
  </div>
</form>
