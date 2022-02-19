<template>
    <div class="videos" :class="{ fullPage: !showSidemenu }">
        <router-link
            class="video"
            v-for="video in shuffle(videos)"
            :key="video.id"
            :to="'/video?v=' + video.id"
        >
            <div class="thumbnail">
                <img :src="video.imgSrc" :alt="video.title" />
                <div class="duration">
                    {{ convertTime(video.duration) }}
                </div>
            </div>
            <div class="video-data">
                <div class="video-info">
                    <img
                        :src="getChannelPP(video.channelId)"
                        :title="getChannelName(video.channelId)"
                        class="video-channel-pp"
                    />
                    <div class="video-metadata">
                        <span class="video-title" :title="video.title">
                            {{ video.title }}
                        </span>
                        <div class="video-channel-data">
                            <router-link
                                class="video-channel-name"
                                :to="'/channel?id=' + video.channelId"
                            >
                                {{ getChannelName(video.channelId) }}
                            </router-link>
                            <svg
                                v-if="getChannelVerified(video.channelId)"
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
                        <div class="video-statistics">
                            <span class="video-views">
                                {{ parseViews(video.views) + " views" }}
                            </span>
                            <span class="video-date">
                                {{ getDateDifference(video.date) }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="video-options">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    subscribers: number,
    verified: boolean
}

export default defineComponent({
    name: 'Videos',
    data() {
        return {
            videos: videos.videos as Video[],
            channels: channels.channels as Channel[],
            showSidemenu: true,
        }
    },
    methods: {
        shuffle(array: Array<Video>) {
            let currentIndex = array.length, randomIndex;
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        },
        getChannelPP(channelId: number): string {
            return this.channels.filter((channel) => channel.id === channelId)[0].imgSrc;
        },
        getChannelName(channelId: number): string {
            return this.channels.filter((channel) => channel.id === channelId)[0].name;
        },
        getChannelVerified(channelId: number): boolean {
            return this.channels.filter((channel) => channel.id === channelId)[0].verified;
        },
        convertTime(duration: number) {
            const hours = Math.floor(duration / 3600);
            const durationMod = duration %= 3600;
            const minutes = Math.floor(durationMod / 60);
            const seconds = durationMod % 60;
            return (hours > 0 ? hours + ':' : '') + ((hours > 0 && minutes < 10) ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
        },
        parseViews(views: number) {
            if (views <= 999) {
                return views;
            }
            if (views <= 9999) {
                const k = Math.floor(views / 1000);
                const remainder = Math.round(views % 1000 / 100);
                return k + '.' + remainder + 'K'
            }
            if (views <= 999999) {
                const k = Math.floor(views / 1000);
                return k + 'K'
            }
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
.videos {
    margin-left: 240px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #181818;
    .video {
        flex: 1 1;
        flex-basis: 23%;
        margin: 1%;
        max-width: 23%;
        cursor: pointer;
        .thumbnail {
            position: relative;
            img {
                width: 100%;
            }
            .duration {
                position: absolute;
                bottom: 0;
                right: 0;
                margin: 4px 4px 10px;
                background: rgba(0, 0, 0, 0.8);
                font-size: 12px;
                border-radius: 2px;
                padding: 3px 4px;
                font-weight: 500;
            }
        }
        &-data {
            display: flex;
            position: relative;
            .video-info {
                display: flex;
                width: 90%;
                .video-channel-pp {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    margin-top: 12px;
                    margin-right: 12px;
                }
                .video-metadata {
                    margin-top: 12px;
                    span {
                        display: inline-block;
                    }
                    .video-title {
                        font-weight: 500;
                        font-size: 16px;
                        margin-bottom: 4px;
                        line-height: 1.4rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .video-channel-data {
                        display: flex;
                        .video-channel-name {
                            font-weight: 400;
                            font-size: 14px;
                            color: #aaa;
                            &:hover {
                                color: #fff;
                            }
                        }
                        svg {
                            fill: #aaa;
                            width: 14px;
                            height: 14px;
                            margin-left: 4px;
                        }
                    }
                    .video-data {
                        color: #aaa;
                    }
                    .video-statistics {
                        color: #aaa;
                        font-size: 14px;
                        margin-top: 5px;
                        .video-views::after {
                            content: "•";
                            margin: 0 4px;
                        }
                    }
                }
            }
            .video-options {
                position: absolute;
                top: 0;
                right: -10px;
                visibility: hidden;
                svg {
                    height: 24px;
                    margin-top: 12px;
                }
            }
        }
        &:hover .video-options {
            visibility: visible;
        }
    }
    &.fullPage {
        margin-left: 72px;
        .video {
            flex-basis: 18%;
            max-width: 18%;
        }
    }
    @media screen and (max-width: 1330px) {
        .video {
            flex-basis: 31%;
            max-width: 31%;
        }
        &.fullPage {
            .video {
                flex-basis: 23%;
                max-width: 23%;
            }
        }
    }
    @media screen and (max-width: 884px) {
        .video {
            flex-basis: 48%;
            max-width: 48%;
        }
        &.fullPage {
            .video {
                flex-basis: 31%;
                max-width: 31%;
            }
        }
    }
    @media screen and (max-width: 658px) {
        .video {
            flex-basis: 98%;
            max-width: 98%;
        }
        &.fullPage {
            .video {
                flex-basis: 48%;
                max-width: 48%;
            }
        }
    }
}
</style>
