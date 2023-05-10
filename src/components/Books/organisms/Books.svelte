<script lang="ts">
  import BooksLoop from "../molecules/BooksLoop.svelte";
  import { QueryBackend } from "../../../utils/QueryBackend";
  import { setContext } from "svelte";

  let backendResponse = QueryBackend.forBooks();

  setContext("addBtn", { btn: false });
</script>

{#await backendResponse}
  <p>Loading...</p>
{:then books}
  <BooksLoop books={books.data} />
{:catch error}
  <p>Error occurred {error.message}</p>
{/await}
