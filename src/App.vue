<template>
  <div id="app">
    <app-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 1000;
}

.content {
  margin-top: 70px; /* Это значение должно соответствовать высоте навигационной панели */
}
</style>
