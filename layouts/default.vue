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
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: rgb(36, 31, 70);
    }
    .main-view {
        background-color: lightslategray;
        display: flex;
        flex-direction: column;
        min-width: 640px;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: inset 3px 3px 2px;
    }
</style>
