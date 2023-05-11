<script lang="ts">
  import type { Book } from "../../../types/Book";
  import BookAuthors from "../atoms/BookAuthors.svelte";
  import BookCover from "../atoms/BookCover.svelte";
  import BookIsbn from "../atoms/BookIsbn.svelte";
  import BookPages from "../atoms/BookPages.svelte";
  import BookPublicationDate from "../atoms/BookPublicationDate.svelte";
  import BookPublisher from "../atoms/BookPublisher.svelte";
  import BookTitle from "../atoms/BookTitle.svelte";

  export let book: Book;
</script>

<div class="book-page">
  <div class="book-list-metadata">
    <BookTitle title={book.title} />
    <BookAuthors authors={book.authors} />
    <BookPublicationDate publicationDate={book.publicationDate} />
    <BookPublisher publisher={book.publisher} />
    <BookIsbn isbn={book.isbn} />
    <BookPages pages={book.pages} />
  </div>
  <div class="book-page-cover">
    <BookCover image={book.coverImage} imageDesc={book.title} />
  </div>
</div>
