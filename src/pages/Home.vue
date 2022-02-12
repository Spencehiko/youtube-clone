<template>
    <div class="home">
        <Header />
        <ChannelsFilter />
        TTT
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChannelsFilter from '@/components/Home/ChannelsFilter.vue';
import Header from '@/components/General/Header.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
    ChannelsFilter,
    Header
},
});
</script>
