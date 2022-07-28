<script>
  // @ts-nocheck


  export let posts;
</script>

<ul>
  {#each posts as post}
    <li>
      <a href="/blog/{post.path}" sveltekit:prefetch>{post.title}</a>
    </li>
  {/each}
</ul>
