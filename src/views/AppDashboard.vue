<script setup>
import MovieCard from './MovieCard.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movies = ref([])

watch(() => route.params.id, fetchMovies, { immediate: true })

onMounted(() => {
  fetchMovies()
})

async function fetchMovies() {
  const response = await fetch(`http://localhost:3000/movies`)
  const data = await response.json()
  movies.value = data
}
</script>

<template>
  <div id="main-content">
    <main>
      <li v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </li>
    </main>
  </div>
</template>

<style scoped></style>
