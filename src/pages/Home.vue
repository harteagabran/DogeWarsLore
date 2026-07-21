<template>
  <WikiHeader />

  <main class="home">
    <h1>Welcome to My World Wiki</h1>

    <p>Browse articles about the world, its people, and its history.</p>

    <section class="category">
      <h2>Characters</h2>

      <ul>
        <li>
          <RouterLink to="/characters/jaddy"> Jaddy </RouterLink>
        </li>
      </ul>
    </section>

    <section class="category">
      <h2>Locations</h2>

      <p>No articles yet.</p>
    </section>

    <section class="category">
      <h2>Lore</h2>

      <p>No articles yet.</p>
    </section>
  </main>

  <WikiFooter />
</template>

<script setup>
import { RouterLink } from "vue-router";

import WikiHeader from "../components/WikiHeader.vue";
import WikiFooter from "../components/WikiFooter.vue";
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

.category {
  margin-top: 35px;
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

a {
  color: #3366cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
