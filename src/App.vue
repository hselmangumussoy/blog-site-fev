<script setup>
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue'

// Dinamik renk değişkenlerini tanımla
const darkColor = ref('#263238'); // Koyu bir mavi gri tonu
const lightColor = ref('#eceff1'); // Açık bir gri tonu

// Renk değişkenlerini Sidebar bileşenine geçir
const colorProps = {
  darkColor,
  lightColor
}
// Değişkenlerin değerlerini güncelleme fonksiyonları
const updateColors = () => {
  document.documentElement.style.setProperty('--dark', darkColor.value);
  document.documentElement.style.setProperty('--light', lightColor.value);
}
updateColors();
</script>

<template>
  <div class="app">
    <Sidebar v-bind="colorProps" />
    <main>
      <!-- Diğer bileşenler veya içerik buraya gelebilir -->
      <router-view />
    </main>
  </div>
</template>



<style lang="scss">
:root {
  --primary-alt: #00d4b8;
  --primary: #0097a7;
  --gray: rgb(165, 163, 163);
  --dark: var(--dark);
  --light: var(--light);
  --sidebar-width: 15%;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

label,
h3,
h2 {
  color: var(--dark);
}

.app {
  display: flex;


  main {
    flex: 1 1 0;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

main {
  flex: 1;
  padding: 20px;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: var(--primary);
  color: var(--light);
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: var(--primary-alt);
}


.link-sections {
  display: flex;
  flex-direction: column;
}

.link-section {
  justify-content: center;
  display: flex;
  text-decoration: none;
  font-size: x-large;
  color: var(--dark);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
}

.link-section:hover {
  background-color: var(--primary-alt);
  color: var(--light);
  transform: scale(1.01);
}

span {
  color: var(--dark);
}
</style>