<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
// import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        // Header,
    },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

html,
body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    background: #181818;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
