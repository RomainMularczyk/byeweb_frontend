<script lang="ts">
  import { Fetch } from "../../../utils/Fetch";


</script>

<div>
  <h1>login</h1>

  <form class="admin-form">
    <input
      class="admin-input"
      type="text"
      name="username"
      required
      placeholder="username"
      on:change={handleChange}
    />
    <input
      class="admin-input"
      type="password"
      name="password"
      required
      minlength="6"
      placeholder="password"
      on:change={handleChange}
    />
    <button class="admin-btn">go</button>
  </form>
</div>
