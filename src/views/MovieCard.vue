<script setup>

const props = defineProps(['movie'])

</script>

<template>
    <div class="card">
        <img src="@/assets/logo.png" />
        <h2>{{ props.movie.name }}</h2>
        <p>movie.rating</p>
    </div>
</template>

<style scoped>
.card{
    background-color: var(--tr-c-white);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    margin: 1rem;
    width: 200px;
    height: 300px;
}
 img{
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
}
</style>