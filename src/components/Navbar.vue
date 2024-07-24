<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1>My Blog</h1>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/articles">Articles</router-link></li>
      <li><router-link to="/categories">Categories</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  padding: 0.5em 1em;
}
.navbar-brand h1 {
  margin: 0;
}
.navbar-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.navbar-links li {
  margin-left: 1em;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
}
.navbar-links a:hover {
  text-decoration: underline;
}
</style>
