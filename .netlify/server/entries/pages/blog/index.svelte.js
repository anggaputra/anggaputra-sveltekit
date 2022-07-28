import { c as create_ssr_component, a as each, e as escape } from "../../../_app/immutable/chunks/index-b7561cb4.js";
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<ul>${each(posts, (post) => {
    return `<li><a href="${"/blog/" + escape(post.path, true)}" sveltekit:prefetch>${escape(post.title)}</a>
    </li>`;
  })}</ul>`;
});
export {
  Blog as default
};
