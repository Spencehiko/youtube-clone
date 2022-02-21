<template>
    <Header />
    <SideMenu />
    <div class="channels" :class="{ fullPage: !showSidemenu }">
        <div
            class="channel-banner"
            :style="{
                background:
                    'center / cover no-repeat url(' +
                    channelInfo.bannerSrc +
                    ')',
            }"
        ></div>
        <div class="channel-header">
            <img :src="channelInfo.imgSrc" :alt="channelInfo.name" />
            <div class="channel-info">
                <div class="data">
                    <div class="name">
                        <span>{{ channelInfo.name }}</span>
                        <svg
                            v-if="channelInfo.verified"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            <g>
                                <path
                                    d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <span class="subs">{{ parseSubs(channelInfo.subscribers) + ' subscribers' }}</span>
                </div>
                <button class="join">JOIN</button>
                <button class="subscribe">SUBSCRIBED</button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                        ></path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/General/Header.vue'; // @ is an alias to /src
import SideMenu from '@/components/General/SideMenu.vue'; // @ is an alias to /src
import store from '@/store';
import videos from '@/datas/videos.json';
import channels from '@/datas/channels.json';

export interface Video {
    id: number,
    title: string,
    channelId: number,
    imgSrc: string,
    date: string,
    views: number,
    likes: number,
    dislikes: number,
    duration: number
}
export interface Channel {
    id: number,
    name: string,
    imgSrc: string,
    bannerSrc: string,
    subscribers: number,
    verified: boolean
}

export default defineComponent({
    name: 'channels',
    components: {
        Header,
        SideMenu,
    },
    data() {
        return {
            channels: channels.channels as Channel[],
            videos: videos.videos as Video[],
            showSidemenu: true,
        }
    },
    computed: {
        channelVideos(): Video {
            return this.videos.filter((video: Video) => video.channelId.toString() === this.channelId)[0]
        },
        channelInfo(): Channel {
            return this.channels.filter((channel: Channel) => channel.id.toString() === this.channelId)[0]
        },
        channelId() {
            return this.$route.query.id?.toString()
        },
    },
    methods: {
        convertTime(duration: number) {
            const hours = Math.floor(duration / 3600);
            const durationMod = duration %= 3600;
            const minutes = Math.floor(durationMod / 60);
            const seconds = durationMod % 60;
            return (hours > 0 ? hours + ':' : '') + ((hours > 0 && minutes < 10) ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
        },
        parseSubs(subs: number) {
            if (subs <= 999) {
                return subs;
            }
            if (subs <= 9999) {
                const k = Math.floor(subs / 1000);
                const remainder = Math.round(subs % 1000 / 100);
                return k + '.' + remainder + 'K'
            }
            if (subs <= 999999) {
                const k = Math.floor(subs / 1000);
                return k + 'K'
            }
            return Math.floor(subs / 1000) + '.' + Math.round(subs % 1000 / 100) + 'M';
        },
        getDateDifference(date: string) {
            const today = new Date().valueOf();
            const dateTime = new Date(date).valueOf();
            const diffTime = today - dateTime;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays < 1) {
                return '9 hours ago';
            }
            if (diffDays < 7) {
                return diffDays - 1 + (diffDays === 1 ? ' day ago' : ' days ago');
            }
            if (diffDays < 31) {
                return Math.floor(diffDays / 7) + (Math.floor(diffDays / 7) === 1 ? ' week ago' : ' weeks ago')
            }
            if (diffDays < 365) {
                return Math.floor(diffDays / 31) + (Math.floor(diffDays / 31) === 1 ? ' month ago' : ' months ago')
            }
            if (diffDays >= 365) {
                return Math.floor(diffDays / 365) + (Math.floor(diffDays / 365) === 1 ? ' year ago' : ' years ago')
            }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.channels {
    margin-left: 240px;
    margin-top: 56px;
    background: #181818;
    .channel-banner {
        width: 100%;
        height: calc((100vw - 240px) / 6.2 - 1px);
        background-size: contain;
    }
    .channel-header {
        padding: 16px calc((100% - 1284px) / 2) 4px;
        display: flex;
        img {
            width: 80px;
            height: 80px;
            margin: 0 24px 0 0;
            flex: none;
            border-radius: 50%;
            background-color: transparent;
            overflow: hidden;
        }
        .channel-info {
            flex-wrap: wrap;
            flex: 1;
            flex-basis: 1e-9px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .data {
                min-width: 150px;
                flex: 1;
                flex-basis: 1e-9px;
                .name {
                    display: inline-flex;
                    width: 100%;
                    span {
                        font-size: 24px;
                        font-weight: 400;
                    }
                    svg {
                        height: 14px;
                        width: 14px;
                        margin: auto 5px;
                    }
                }
                .subs {
                    color: #aaa;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
}
@media screen and (max-width: 1328px) {
    .channels {
        .channel-banner {
            height: calc(16.2vw - 1px);
        }
    }
}
</style>
