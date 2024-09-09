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
    <label for="comment" class="form-label text-center">
      Drop me a line. Any questions or feedback are welcomed!
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
    <button type="submit" class="form-button">Send</button>
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
    color: #111827;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .form-textarea {
    width: 100%;
    border: 2px solid #4a5568;
    background-color: #2d3748;
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

  .form-textarea:focus {
    border-color: #63b3ed;
    background-color: #2c5282;
    color: #f1f5f9;
  }

  .form-textarea::placeholder {
    color: #e4e4e7;
  }

  .form-button {
    background-color: #2563eb;
    color: #e2e8f0;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
    outline: none;
    cursor: pointer;
  }

  .form-button:hover {
    background-color: #3182ce;
  }

  /* Dark mode adjustments */
  :global(.dark) .form-label {
    color: #f7fafc;
  }

  :global(.dark) .form-textarea {
    background-color: #1a202c;
    border-color: #4a5568;
    color: #f7fafc;
  }

  :global(.dark) .form-textarea:focus {
    border-color: #63b3ed;
    background-color: #2c5282;
  }

  :global(.dark) .form-button {
    background-color: #63b3ed;
    color: #1a202c;
  }

  :global(.dark) .form-button:hover {
    background-color: #4299e1;
  }
</style>
