import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const { BACKEND_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

console.log(BACKEND_URL)

// https://astro.build/config
export default defineConfig({});
