<script lang="ts">
  import type { GoogleBooksResponse } from "../../../types/GoogleBooksResponse";

  export let results: GoogleBooksResponse[];
</script>

{#each results as result}
  <p>{result}</p>
{/each}
