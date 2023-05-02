<script lang="ts">
  import axios from "axios";
  import type { Book } from "../../../types/Book";
  import type { GoogleBooksResponse } from "../../../types/GoogleBooksResponse";
  import BookCover from "../atoms/BookCover.svelte";
  import BookAuthors from "../atoms/BookAuthors.svelte";
  import BookPublisher from "../atoms/BookPublisher.svelte";
  import BookPublicationDate from "../atoms/BookPublicationDate.svelte";
  import BookIsbn from "../atoms/BookIsbn.svelte";
  import BookTitle from "../atoms/BookTitle.svelte";

  export let book: Book;

  const getBookMetadata = async (): Promise<GoogleBooksResponse> => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${book.isbn}`
    );
    return data;
  };

  let googleBooksResponse = getBookMetadata();
</script>

<div class="book-card">
  <BookTitle title={book.title} />
  <BookAuthors authors={book.authors} />
  <BookCover bookMetadata={googleBooksResponse} />
  <BookPublicationDate publicationDate={book.publicationDate} />
  <BookPublisher publisher={book.publisher} />
  <BookIsbn isbn={book.isbn} />
  <p>{book.pages} pages</p>
</div>
