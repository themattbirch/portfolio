<script lang="ts">
 import { onMount } from "svelte";
 import kwesforms from 'kwesforms';

onMount(() => {
  (kwesforms as any).init();
});
</script>

<form
  method="POST"
  action="https://kwesforms.com/api/f/J4cZUcPjZqE1xfJ662no"
  class="kf-form grid gap-y-2 items-end max-md:grid-cols-1"
  data-kw-validate-on-change="false"
  data-kw-validate-on-blur="false"
  data-kw-show-errors-on="submit"
>
  <label for="comment" class="text-zinc-900 text-2xl mb-2 mt-10">
    Drop Matt a line. Any questions or feedback is welcomed! 
  </label>
  <textarea
    rows="3"
    name="comment"
    id="comment"
    class="border border-teal-900 rounded-lg text-2xl px-6 py-6"
    data-kw-rules="required"
    data-kw-max-length="255"
  />
  <button
    type="submit"
    class="text-2xl text-zinc-100 bg-teal-900 px-6 py-5 rounded-xl my-1"
  >
    Send
  </button>
</form>