import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    }),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
  extensions: [".svelte", ".html", ...mdsvexConfig.extensions],
  prerender: {
    default: true,
  },
  trailingSlash: "always",
};

export default config;
