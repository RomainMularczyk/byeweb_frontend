<script lang="ts">
  import { ToastStatus } from "../../../types/Toast.d";

  export let status: ToastStatus;
  export let message: string;
</script>

{#if status === ToastStatus.success}
  <div>
    <p>success !</p>
    <p>{message}</p>
  </div>
{:else if status === ToastStatus.info}
  <div>
    <p>a thing happened</p>
    <p>{message}</p>
  </div>
{:else if status === ToastStatus.warning}
  <div>
    <p>warning !</p>
    <p>{message}</p>
  </div>
{:else}
  <div>
    <p>an error has occurred</p>
    <p>{message}</p>
  </div>
{/if}
