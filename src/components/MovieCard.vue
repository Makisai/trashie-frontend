<script setup>

const props = defineProps(['movie'])

</script>

<template>
    <router-link :to="`/movies/${movie.id}`">
    <div class="card">
        <img src="@/assets/logo.png" />
        <h2>{{ props.movie.name }}</h2>
        <p>movie.rating</p>
        <p>groupe rating</p>
        <p>tags</p>
    </div>
</router-link>
</template>

<style scoped>
.card{
    background-color: var(--tr-c-white);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    margin: 1rem;
    width: 200px;
    height: auto;
}

.card:hover{
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
    color: var(--tr-c-secondary);
    cursor: pointer;
}
 img{
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
}
</style>