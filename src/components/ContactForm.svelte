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
      Drop Matt a line. Any questions or feedback are welcomed!
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
    <button type="submit" class="form-button"> Send </button>
  </div>
</form>

<style>
  .form-container {
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    background-image: linear-gradient(to right, #dbeafe, #eff6ff);
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;
    padding: 2rem;
    border: 1px solid #bfdbfe;
    transition: background-image 0.3s ease;
  }

  .form-container:hover {
    background-image: linear-gradient(to right, #bfdbfe, #dbeafe);
  }

  /* Dark mode styles */
  :global(.dark) .form-container {
    background-image: linear-gradient(to right, #1e3a8a, #2563eb);
    border-color: #3b82f6;
  }

  :global(.dark) .form-container:hover {
    background-image: linear-gradient(to right, #1e40af, #3b82f6);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    color: #1e40af;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  /* Dark mode adjustments for label */
  :global(.dark) .form-label {
    color: #cbd5e0 !important; /* Lighter gray for better visibility in Dark Mode */
  }

  .form-textarea {
    width: 100%;
    border-width: 2px;
    border-color: #3b82f6;
    background-color: #ffffff;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
    transition:
      border-color 0.3s ease,
      background-color 0.3s ease;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .form-textarea:focus {
    border-color: #2563eb;
    background-color: #eff6ff;
  }

  /* Dark mode adjustments for textarea */
  /* Dark mode adjustments for textarea */
  :global(.dark) .form-container .form-textarea {
    background-color: #3b536a !important; /* Lighter background for Dark Mode */
    border-color: #63b3ed !important;
    color: #e2e8f0 !important;
  }

  :global(.dark) .form-container .form-textarea:focus {
    background-color: #4a637b !important; /* Slightly darker when focused for contrast */
    border-color: #63b3ed !important;
  }

  :global(.dark) .form-container .form-textarea::placeholder {
    color: #a0aec0 !important;
  }

  .form-button {
    background-color: #3b82f6;
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
    outline: none;
    cursor: pointer;
  }

  .form-button:hover {
    background-color: #2563eb;
  }

  /* Dark mode adjustments for button */
  :global(.dark) .form-button {
    background-color: #63b3ed;
    color: #1a202c;
  }

  :global(.dark) .form-button:hover {
    background-color: #4299e1;
  }
</style>
