<script lang="ts">
  import type { Book } from "../../../types/Book";
  import BookCardLayout from "./BookCardLayout.svelte";

  export let books: Book[];
</script>

<div class="book-list">
  {#each books as book}
    <BookCardLayout {book} />
  {/each}
</div>
