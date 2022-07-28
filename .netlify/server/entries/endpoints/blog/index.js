import { _ as __vite_glob_0_0 } from "../../../_app/immutable/chunks/foo-bar-d9c84afe.js";
import { _ as __vite_glob_0_1 } from "../../../_app/immutable/chunks/helloworld-53fbfeb6.js";
import "../../../_app/immutable/chunks/index-b7561cb4.js";
import "../../../_app/immutable/chunks/_layout-8a559e80.js";
const convertDate = (published) => {
  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  };
  const date = published.substring(0, 10);
  const [year, month, day] = date.split("-");
  return `${day}-${months[parseInt(month)]}-${year}`;
};
async function GET() {
  const allPostFiles = Object.assign({ "./foo-bar.md": __vite_glob_0_0, "./helloworld.md": __vite_glob_0_1 });
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = path.slice(2, -3);
    return {
      ...post.metadata,
      path: postPath,
      published: convertDate(post.metadata.date)
    };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (!posts.length) {
    return { status: 404 };
  }
  return { body: { posts } };
}
export {
  GET
};
