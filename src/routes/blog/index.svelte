<script>
  // @ts-nocheck
  export let posts;
</script>

<h1 class="my-5">Blog</h1>
{#each posts as post}
  <div class="col-lg-3 col-sm-12 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <a
            class="text-decoration-none"
            href="/blog/{post.path}"
            sveltekit:prefetch>{post.title}</a
          >
        </h5>
        <small class="card-text text-black">
          {post.excerpt}
        </small>
      </div>
    </div>
  </div>
{/each}
