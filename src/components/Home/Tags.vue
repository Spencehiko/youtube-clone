<template>
    <div class="tags" :class="{ fullPage: !showSidemenu }">
        <div class="tags-wrapper">
            <button v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import tags from '@/datas/tags.json';

export interface Tag {
    id: number,
    name: string
}

export default defineComponent({
    name: 'Tags',
    data() {
        return {
            showSidemenu: true,
            tags: tags.tags as Tag[],
        }
    },
    beforeMount() {
        this.showSidemenu = store.getters.showSidemenu
        store.watch((getters) => getters.showSidemenu, () => {
            this.showSidemenu = store.getters.showSidemenu;
        })
    },
});
</script>
<style lang="less" scoped>
.tags {
    position: absolute;
    background: #202020;
    left: 240px;
    width: calc(100% - 240px);
    top: 60px;
    z-index: 1;
    &-wrapper {
        button {
            margin: 12px;
            margin-left: 0;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0 12px;
            transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
            height: 32px;
            min-width: 12px;
            padding: 0 10px;
            border-radius: 16px;
            box-sizing: border-box;
            outline: none;
            overflow: hidden;
            cursor: pointer;
            user-select: none;
            position: relative;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            display: -ms-inline-flexbox;
            display: -webkit-inline-flex;
            display: inline-flex;
        }
    }
}
</style>
