<script lang="ts">
  import type { BackendResponse } from "../../../types/BackendResponse";
  import type { Book } from "../../../types/Book";
  import { ToastStatus } from "../../../types/Toast.d";
  import { QueryBackend } from "../../../utils/QueryBackend";
  import Toast from "../../Toasts/organisms/Toast.svelte";
  import BookPage from "../molecules/BookPage.svelte";

  export let isbn: string;
  const backendResponse = async () => {
    const response = await QueryBackend.forBooks();
    return response;
  };
  let loadBooks = backendResponse();
</script>

{#await loadBooks}
  <p>Loading...</p>
{:then books}
  <BookPage book={books.data.filter((b) => b.isbn === isbn)[0]} />
{:catch error}
  <Toast message={error.message} status={ToastStatus.error} />
{/await}
