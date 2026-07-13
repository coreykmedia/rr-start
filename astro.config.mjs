// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://start.redefiningretirement.io',
  redirects: {
    '/guides/ai-newsletter-launch-checklist': '/guides/ai-newsletter-fast-track/checklist',
    '/gen-exit': '/guides/gen-exit-playbook',
    '/audience-worth': '/tools/whats-your-audience-worth',
  },
});
