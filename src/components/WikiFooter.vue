<template>
  <footer class="wiki-footer">
    <p>DogeWars © {{ year }}</p>

    <p>Built with Vue + Vite</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.wiki-footer {
  margin-top: 50px;
  padding: 20px 30px;
  border-top: 1px solid #ccc;
  background: #f8f8f8;
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
