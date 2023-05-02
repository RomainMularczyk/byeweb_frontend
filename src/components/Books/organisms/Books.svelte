<script lang="ts">
  import axios from "axios";
  import BooksLoop from "../molecules/BooksLoop.svelte";
  import type { Book } from "../../../types/Book";
  import type { ApiResponse } from "../../../types/ApiResponse";
  const getData = async () => {
    const response = await axios("http://localhost:5000/books");
    return response;
  };
  let data: Promise<{ data: ApiResponse<Book[]> }> = getData();
</script>

{#await data}
  <p>Loading...</p>
{:then books}
  <BooksLoop books={books.data.data} />
{:catch error}
  <p>Error occurred {error.message}</p>
{/await}
