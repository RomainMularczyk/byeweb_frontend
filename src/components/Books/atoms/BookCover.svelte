<script lang="ts">
  import type { GoogleBooksResponse } from "../../../types/GoogleBooksResponse";

  export let bookMetadata: Promise<GoogleBooksResponse>;
</script>

{#await bookMetadata}
  <p>Loading...</p>
{:then data}
  <img
    src={data.items[0].volumeInfo.imageLinks.smallThumbnail}
    alt={data.items[0].volumeInfo.title}
  />
{:catch error}
  <p>An error occurred</p>
{/await}
