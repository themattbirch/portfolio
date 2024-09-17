<script lang="ts">
  import { onMount } from "svelte";
  import kwesforms from "kwesforms";

  onMount(() => {
    if (kwesforms && typeof kwesforms.init === 'function') {
      console.log("Initializing KwesForms...");
      kwesforms.init();
    } else {
      console.error("KwesForms not available");
    }
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
    <label for="comment" class="form-label text-center">
      Drop me a line. Any questions or feedback are welcome!
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
    <button type="submit" class="form-button font-bold">Send</button>
  </div>
</form>

<style>
  .form-container {
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-label {
    display: block;
    color: #2d3748;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .form-textarea {
    width: 100%;
    border: 2px solid #4a5568;
    background-color: #0f172a;
    color: #e2e8f0;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
    transition:
      border-color 0.3s ease,
      background-color 0.3s ease;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  /* Light Mode Focus State */
  .form-textarea:focus {
    background-color: #e2e8f0; /* Light background on focus */
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
    color: #1a202c;
  }

  /* Placeholder Disappears in Light Mode on Focus */
  .form-textarea:focus::placeholder {
    color: transparent;
  }

  /* Dark Mode Default State */
  :global(.dark) .form-textarea {
    background-color: #2d3748; /* Lightened dark mode background */
    color: #f7fafc;
    border-color: #4a5568;
  }

  /* Dark Mode Focus State */
  :global(.dark) .form-textarea:focus {
    background-color: #374151; /* Lighter background for better contrast */
    color: #f7fafc;
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6); /* Focus shadow */
  }

  /* Placeholder Disappears in Dark Mode on Focus */
  :global(.dark) .form-textarea:focus::placeholder {
    color: transparent;
  }

  .form-textarea::placeholder {
    color: #e4e4e7;
  }

  .form-button {
    background-color: #1e40af;
    color: #fafafa;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .form-button:hover {
    background-color: #1e3a8a;
  }

  /* Dark mode adjustments */
  :global(.dark) .form-label {
    color: #f7fafc;
  }

  :global(.dark) .form-button {
    background-color: #63b3ed;
    color: #fafafa;
  }

  :global(.dark) .form-button:hover {
    background-color: #4299e1;
  }
</style>
