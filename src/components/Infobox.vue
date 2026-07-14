<template>
  <aside class="infobox">
    <h2>{{ name }}</h2>

    <slot />
  </aside>
</template>

<script setup>
defineProps({
  name: String,
});
</script>

<style scoped>
.infobox {
  float: right;
  width: 250px;
  border: 1px solid #aaa;
  padding: 15px;
  margin-left: 20px;
}
</style>
