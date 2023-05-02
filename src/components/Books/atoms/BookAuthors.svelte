<script lang="ts">
  import type { Author } from "../../../types/Author";

  export let authors: Author[];
</script>

<p class="book-metadata">authors :</p>
<ul>
  {#each authors as author}
    <li>{author.name.toLowerCase()}</li>
  {/each}
</ul>
