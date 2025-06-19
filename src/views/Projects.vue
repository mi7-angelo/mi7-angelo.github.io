<template>
  <section>
    <h1>Projects</h1>
    <div class="project" v-for="(project, i) in projects" :key="i">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'To-Do App', description: 'A Vue app for managing tasks.' },
  { title: 'Portfolio Website', description: 'My personal online resume.' }
]
</script>

<style scoped>
.project {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
