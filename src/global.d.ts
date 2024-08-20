/// <reference types="astro/client" />

declare module 'kwesforms';
interface Window {
  initializeSkillToggles?: () => void;
}

declare global {
  interface Window {
    initializeSkillToggles?: () => void;
  }
}

export {};