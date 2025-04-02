<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id
const movie = ref(null)

onMounted(async () => {
    const response = await fetch(`http://localhost:3000/movies/${movieId}`)
    movie.value = await response.json()
})
</script>

<template>
    <div v-if="movie">
      <h1>{{ movie.name }}</h1>
    </div>
  </template>