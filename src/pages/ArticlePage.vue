<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import WikiHeader from "../components/WikiHeader.vue";
import WikiFooter from "../components/WikiFooter.vue";

const route = useRoute();

const md = new MarkdownIt();

const articles = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const article = computed(() => {
  const path = `../content/characters/${route.params.slug}.md`;
  return articles[path];
});

const renderedArticle = computed(() => {
  if (!article.value) return "";

  return md.render(article.value);
});
</script>

<template>
  <WikiHeader />

  <div class="wiki-page">
    <main class="article">
      <article v-html="renderedArticle"></article>
    </main>
  </div>

  <WikiFooter />
</template>
