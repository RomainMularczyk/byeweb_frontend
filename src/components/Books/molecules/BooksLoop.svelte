<script lang="ts">
  import type { Book } from "../../../types/Book";
  import BookCard from "./BookCard.svelte";

  export let books: Book[];
</script>

<div class="book-list">
  {#each books as book}
    <BookCard {book} />
  {/each}
</div>
