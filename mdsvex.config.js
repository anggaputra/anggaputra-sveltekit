import { defineMDSveXConfig as defineConfig } from "mdsvex";

const mdsvexConfig = defineConfig({
	extensions: [".md", ".svx"],
	smartypants: { dashes: "oldschool" },
});

export default mdsvexConfig;