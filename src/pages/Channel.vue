<template>
    <Header />
    <SideMenu />
    <ChannelInfo />
    <Videos />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/General/Header.vue'; // @ is an alias to /src
import SideMenu from '@/components/General/SideMenu.vue'; 
import ChannelInfo from '@/components/Channel/ChannelInfo.vue';
import Videos from '@/components/Channel/Videos.vue';

export default defineComponent({
    name: 'channels',
    components: {
        Header,
        SideMenu,
        ChannelInfo,
        Videos,
    }
})
</script>
