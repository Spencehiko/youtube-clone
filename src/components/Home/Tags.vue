<template>
    <div class="tags" :class="{ fullPage: !showSidemenu }">
        <div class="tags-wrapper">
            <button
                v-for="tag in tags"
                :key="tag.id"
                :class="{ active: tag.id === 1 }"
            >
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
    background: #202020;
    width: calc(100% - 240px);
    margin-left: 240px;
    margin-top: 60px;
    z-index: 1;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 30px;
    &-wrapper {
        position: relative;
        button {
            margin: 12px;
            margin-left: 0;
            min-width: 12px;
            padding: 0 12px;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 32px;
            border-radius: 16px;
            box-sizing: border-box;
            outline: none;
            overflow: hidden;
            cursor: pointer;
            user-select: none;
            position: relative;
            flex-direction: row;
            align-items: center;
            display: inline-flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: .2px;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: Roboto, Arial, sans-serif;
            &.active {
                background: #fff;
                color: #030303;
            }
        }
    }
    &.fullPage {
        margin-left: 72px;
        width: calc(100% - 72px);
    }
}
</style>
