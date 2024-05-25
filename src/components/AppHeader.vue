<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/history">History</router-link></li>
      <li><router-link to="/technical">Technical</router-link></li>
      <li><router-link to="/usage">Usage</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

li {
  display: inline;
}

a {
  text-decoration: none;
  color: #0f66bd;
}

a.router-link-exact-active {
  font-weight: bold;
}

a:hover {
  background-color: #0000;
  font-weight: bold;
}
</style>
