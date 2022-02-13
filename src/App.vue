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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

html,
body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    background: #202020;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: #fff;
}
svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #fff;
    width: 24px;
}

[aria-label] {
    position: relative;
}

[aria-label]:after {
    content: attr(aria-label);
    display: none;
    position: absolute;
    top: 65px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 5000;
    pointer-events: none;
    padding: 8px 10px;
    line-height: 15px;
    white-space: nowrap;
    text-decoration: none;
    text-indent: 0;
    overflow: visible;
    font-size: 0.9em;
    font-weight: 300;
    color: #fff;
    text-shadow: 1px 0 1px #888;
    background-color: #595959;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
}

[aria-label]:hover:after,
[aria-label]:focus:after {
    display: block;
}
</style>
