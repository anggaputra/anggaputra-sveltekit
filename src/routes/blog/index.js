// @ts-nocheck
import { convertDate } from "$lib/utils";
export async function GET() {
	const allPostFiles = import.meta.globEager("./posts/*.{svx,md}");
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
