<template>
    <div class="home">
        <Header />
        <SideMenu />
        <ChannelsFilter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/General/Header.vue'; // @ is an alias to /src
import SideMenu from '@/components/General/SideMenu.vue'; // @ is an alias to /src
import ChannelsFilter from '@/components/Home/ChannelsFilter.vue';

export default defineComponent({
    name: 'Home',
    components: {
    Header,
    SideMenu,
    ChannelsFilter,
},
});
</script>
