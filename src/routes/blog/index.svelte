<script>
	// @ts-nocheck
	export let posts;
</script>

<h1 class="hero-text  mb-3">Blog.</h1>
{#each posts as post}
	<div class="post">
		<p>{post.published}</p>
		{#if post.linkExternal}
			<a class="text-decoration-none" href={post.linkExternal} target="_blank">{post.title}</a>
		{:else}
			<a class="text-decoration-none" href="/blog/{post.path}" sveltekit:prefetch>{post.title}</a>
		{/if}
	</div>
{/each}
