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
  class="form-container"
  data-kw-validate-on-change="false"
  data-kw-validate-on-blur="false"
  data-kw-show-errors-on="submit"
>
  <div class="form-group">
    <label for="comment" class="form-label">
      Drop Matt a line. Any questions or feedback is welcomed!
    </label>
    <textarea
      rows="5"
      name="comment"
      id="comment"
      class="form-textarea"
      placeholder="Your message here..."
      data-kw-rules="required"
      data-kw-max-length="255"
    ></textarea>
  </div>
  <div class="flex justify-end">
    <button type="submit" class="form-button">
      Send
    </button>
  </div>
</form>

<style>
  .form-container {
  width: 100%;
  max-width: 40rem; /* 2xl equivalent */
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* shadow-md */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 1.5rem; /* p-6 */
  border: 1px solid #e5e7eb; /* border-gray-200 */
}

  .form-group {
    margin-bottom: 1.5rem; /* mb-6 */
  }

  .form-label {
    display: block;
    color: #065f46; /* text-teal-900 */
    font-size: 1.25rem; /* text-xl */
    font-weight: 600; /* font-semibold */
    margin-bottom: 0.5rem; /* mb-2 */
  }

  .form-textarea {
    width: 100%;
    border-width: 2px; /* border-2 */
    border-color: #0d9488; /* border-teal-600 */
    border-radius: 0.5rem; /* rounded-lg */
    font-size: 1.125rem; /* text-lg */
    padding: 0.5rem 1rem; /* px-4 py-2 */
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 150ms; /* transition-colors */
    outline: none;
  }

  .form-textarea:focus {
    border-color: #14b8a6; /* focus:border-teal-500 */
  }

  .form-button {
    background-color: #0d9488; /* bg-teal-600 */
    color: white;
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    padding: 0.5rem 1.5rem; /* px-6 py-2 */
    border-radius: 0.5rem; /* rounded-lg */
    transition-property: background-color, border-color, color, fill, stroke;
    transition-duration: 150ms; /* transition-colors */
    outline: none;
    cursor: pointer;
  }

  .form-button:hover {
    background-color: #0f766e; /* hover:bg-teal-700 */
  }

  .form-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.5); /* focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 */
  }
</style>