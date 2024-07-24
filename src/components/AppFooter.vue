<!-- src/components/ArticleCard.vue -->
<template>
  <div class="article-card">
    <img :src="image" alt="Article Image" class="article-image" />
    <div class="article-details">
      <h2 class="article-title">{{ title }}</h2>
      <p class="article-summary">{{ summary }}</p>
      <button @click="readMore">Read More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    image: String,
    title: String,
    summary: String
  },
  methods: {
    readMore() {
      // Read more functionality
      console.log('Read more clicked');
    }
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1em;
  max-width: 300px;
}
.article-image {
  width: 100%;
  height: auto;
}
.article-details {
  padding: 1em;
}
.article-title {
  font-size: 1.5em;
  margin: 0 0 0.5em;
}
.article-summary {
  font-size: 1em;
  margin: 0 0 1em;
}
</style>
