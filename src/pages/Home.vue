<template>
    <div class="home">
        <Header />
        <SideMenu />
        <Videos />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/General/Header.vue'; // @ is an alias to /src
import SideMenu from '@/components/General/SideMenu.vue'; // @ is an alias to /src
import Videos from '@/components/Home/Videos.vue';

export default defineComponent({
    name: 'Home',
    components: {
    Header,
    SideMenu,
    Videos,
},
});
</script>
