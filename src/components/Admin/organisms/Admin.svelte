---
const errors = "";
if (Astro.request.method === "POST") {
  try {
    const data = await Astro.request.formData()
    
  } catch (err) {
    errors = "An error occurred."
  }
}
---
<div>
  <h1>login</h1>

  <form class="admin-form" method="POST">
    <input
      class="admin-input"
      type="text"
      name="username"
      required
      placeholder="username"
    />
    <input
      class="admin-input"
      type="password"
      name="password"
      required
      minlength="6"
      placeholder="password"
    />
    <button class="admin-btn">go</button>
  </form>
</div>
