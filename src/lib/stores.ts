import { writable } from 'svelte/store';

/** Whether the hero h1 has scrolled past its initial position and is "stuck" */
export const heroStuck = writable(false);
