<template>
    <div class="app">
        <Nuxt keep-alive class="main-view" />
    </div>
</template>

<script>
export default {
    name: 'default',
}
</script>

<style scoped>
    .app {
        min-height: 100vh;
        display: flex;
        justify-content: center;
    }
</style>
