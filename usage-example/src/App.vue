<script setup lang="ts">
import My3dContent from './components/My3dContent.vue';
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://needle.tools" target="_blank">
      <img src="https://cdn.needle.tools/static/branding/logo_needle_black.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <My3dContent />
  <span class="info">
    Example for a <a target="_blank" href="https://github.com/needle-engine/custom-library-example">
      custom Needle Engine library
    </a>
  </span>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.info {
  margin-top: 1rem;
}
</style>
