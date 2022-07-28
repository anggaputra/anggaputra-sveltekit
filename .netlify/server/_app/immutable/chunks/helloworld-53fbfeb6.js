import { c as create_ssr_component, v as validate_component } from "./index-b7561cb4.js";
import { L as Layout } from "./_layout-8a559e80.js";
const metadata = {
  "title": "Hello world",
  "author": "Jeff",
  "date": "2022-04-15T00:00:00.000Z",
  "layout": "blog",
  "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum odio nisl, nec pretium dolor varius in."
};
const Helloworld = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h3>Hello world</h3>`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Helloworld,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Helloworld as H,
  __vite_glob_0_1 as _,
  metadata as m
};
