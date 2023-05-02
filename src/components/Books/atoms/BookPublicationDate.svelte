<script lang="ts">
  import moment from "moment";
  export let publicationDate: number;
</script>

<p>
  <span class="book-metadata">publication year :</span>
  <span>{moment(publicationDate).format("YYYY")}</span>
</p>
