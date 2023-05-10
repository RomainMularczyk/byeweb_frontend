<script lang="ts">
  import type { AddBookBtn } from "../../../types/Lifecycle";
  import type { BackendResponse } from "../../../types/BackendResponse";
  import type { Book } from "../../../types/Book";
  import BookCover from "../atoms/BookCover.svelte";
  import BookAuthors from "../atoms/BookAuthors.svelte";
  import BookPublisher from "../atoms/BookPublisher.svelte";
  import BookPublicationDate from "../atoms/BookPublicationDate.svelte";
  import BookIsbn from "../atoms/BookIsbn.svelte";
  import BookTitle from "../atoms/BookTitle.svelte";
  import BookPages from "../atoms/BookPages.svelte";
  import { getContext } from "svelte";
  import { QueryBackend } from "../../../utils/QueryBackend";
  import Toast from "../../Toasts/organisms/Toast.svelte";
  import { ToastStatus } from "../../../types/Toast.d";

  export let book: Book;
  let addBtn = getContext<AddBookBtn>("addBtn").btn;
  let backendResponse: BackendResponse<Book>;

  const handleClick = async () => {
    backendResponse = await QueryBackend.toAddBook(book);
  };
</script>

<a href={`books/${book.isbn}`} class="book-card">
  <div class="book-list-metadata">
    <BookTitle title={book.title} />
    <BookAuthors authors={book.authors} />
    <BookPublicationDate publicationDate={book.publicationDate} />
    <BookPublisher publisher={book.publisher} />
    <BookIsbn isbn={book.isbn} />
    <BookPages pages={book.pages} />
  </div>
  <div class="book-cover">
    <BookCover image={book.coverImage} imageDesc={book.title} />
    {#if addBtn}
      <button class="btn-secondary" on:click|preventDefault={handleClick}
        >add book</button
      >
    {/if}
    {#if backendResponse}
      <Toast
        message={backendResponse.data.title}
        status={ToastStatus.success}
      />
    {/if}
  </div>
</a>
