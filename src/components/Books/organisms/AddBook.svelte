<script lang="ts">
  import { Fetch } from "../../../utils/Fetch";
  import BooksResult from "../molecules/BooksResult.svelte";

  const handleChange = async (e: Event) => {
    const result = await Fetch.books(e.target.value);
    console.log(result);
  };
</script>

<form>
  <label for="searchBook">title</label>
  <input on:change={handleChange} />
  <!-- {#await bookResults}
        <BooksResult results={bookResults.data} />
        {/await} -->
</form>
