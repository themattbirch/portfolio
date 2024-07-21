declare module 'kwesforms' {
  export function init(): void;

  export interface KwesFormAttributes extends svelte.JSX.HTMLAttributes<HTMLFormElement> {
    redirect?: string;
    'no-error-message'?: boolean;
  }

  export interface KwesTextareaAttributes extends svelte.JSX.HTMLAttributes<HTMLTextAreaElement> {
    rules?: string;
  }
}