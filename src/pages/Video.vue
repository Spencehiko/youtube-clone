<template>
  <div class="video-page">
    <div class="video-div">
      <div class="video-player">
        <img :src="videoInfo.imgSrc" :alt="videoInfo.title">
        <div class="video-progress-bar"></div>
        <div class="video-controls">
          <div class="left-controls"></div>
          <div class="right-controls"></div>
        </div>
      </div>
      <div class="video-data">
        <div class="title">
          {{ videoInfo.title }}
        </div>
        <div class="data">
          <div class="views">
            <span>{{ videoInfo.views }}</span>
            <span>{{ videoInfo.date }}</span>
          </div>
        </div>
      </div>
    </div>
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
            videoId: this.$route.query.v?.toString(),
            videos: videos.videos as Video[],
            channels: channels.channels as Channel[],
            showSidemenu: true,
            
        }
    },
    computed: {
      videoInfo(): Video {
        return this.videos.filter((video: Video) => video.id.toString() === this.videoId)[0]
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
