<script lang="ts">
  import type { GoogleBooksResponse } from "../../../types/GoogleBooksResponse";
  import GoogleBooksApiError from "../../../errors/GoogleBooksApiError";
  import { Fetch } from "../../../utils/Fetch";
  import { Transform } from "../../../utils/Transform";
  import Toast from "../../Toasts/organisms/Toast.svelte";
  import BooksLoop from "../molecules/BooksLoop.svelte";
  import { setContext } from "svelte";

  let errorMsg = "";
  let bookResults: GoogleBooksResponse;

  setContext("addBtn", { btn: true });

  const handleChange = async (e: Event) => {
    if (e.target) {
      const event = e.target as HTMLInputElement;
      if (event.value) {
        try {
          bookResults = await Fetch.books(event.value);
        } catch (err) {
          err instanceof GoogleBooksApiError
            ? (errorMsg = err.message)
            : (errorMsg = "unkown error has occurred.");
        }
      } else {
        errorMsg = "isbn can only be numeric.";
      }
    }
  };
</script>

<form>
  <h1>add a new book</h1>
  <form class="form-secondary">
    <input
      class="input-secondary"
      placeholder="isbn"
      type="text"
      on:change={handleChange}
    />
  </form>
  {#if bookResults}
    <BooksLoop books={Transform.googleBooksIntoBooks(bookResults)} />
  {/if}
  {#if errorMsg}
    <Toast message={errorMsg} />
  {/if}
</form>
