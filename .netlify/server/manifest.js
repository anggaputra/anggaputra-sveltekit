export const manifest = {
	appDir: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9730254d.js","imports":["_app/immutable/start-9730254d.js","_app/immutable/chunks/index-c33a31f2.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: () => import('./entries/endpoints/blog/index.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/foo-bar",
				pattern: /^\/blog\/foo-bar\/?$/,
				names: [],
				types: [],
				path: "/blog/foo-bar",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/helloworld",
				pattern: /^\/blog\/helloworld\/?$/,
				names: [],
				types: [],
				path: "/blog/helloworld",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
