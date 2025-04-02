<script setup>
    const handleClick = () => {
        // Handle the click event for the FAB button
        console.log('FAB clicked');
    };
</script>

<template>
    <button class="fab" @click ="handleClick">
        <slot>+</slot>
    </button>
</template>

<style scoped>
.fab {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: var(--tr-c-primary);
    color: white;
    border-radius: 50%;
    border: none;
    font-size: 2rem;
    box-shadow: 0 0 10px var(--tr-c-background-primary);
    cursor: pointer;
}
.fab:hover {
    background-color: var(--tr-c-secondary);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
}
</style>