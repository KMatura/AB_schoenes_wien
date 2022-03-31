<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
    <NavBar></NavBar>
    <!-- <div class="d-flex justify-content-center"><RouterView /></div> -->
</template>

<style scoped>
a.nav-link {
  display: inline;
  color: black;
  border: white;
}
a.router-link-active {
  border: #3fb984 3px solid;
  color: black;
}
@font-face {
font-family: 'Montserrat';
font-weight: 400;
font-style: normal;
font-display: auto;
unicode-range: U+000-5FF;
src: local('Montserrat'), url('fonts/Montserrat/Montserrat-Regular.ttf') format('ttf');
}
body,
router-link {
font-family: 'Montserrat';
}
a {
text-decoration: none;
}
</style>
