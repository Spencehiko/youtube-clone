<template>
    <div class="nav">
        <div class="start">
            <div class="sidemenu-icon" @click="toggleSidemenu()">
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                        ></path>
                    </g>
                </svg>
            </div>
            <router-link to="/">
                <div class="logo" title="YouTube Home Page">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/800px-YouTube_social_white_squircle.svg.png"
                        alt="HikoTube"
                    />
                    <span>HikoTube</span>
                </div>
            </router-link>
        </div>
        <div class="middle">
            <div class="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    v-model="searchInput"
                    id="searchInput"
                />
                <svg
                    v-if="searchInput.length"
                    @click="searchInput = ''"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
                        ></path>
                    </g>
                </svg>
            </div>
            <button class="search-button" aria-label="Search">
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                        ></path>
                    </g>
                </svg>
            </button>
            <button class="voice-icon" aria-label="Search with your voice">
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
        <div class="end">
            <div class="buttons">
                <button class="search-icon" aria-label="Search">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                            ></path>
                        </g>
                    </svg>
                </button>
                <button aria-label="Create">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                            ></path>
                        </g>
                    </svg>
                </button>
                <button aria-label="HikoTube Apps">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
                            ></path>
                        </g>
                    </svg>
                    <!-- <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g class="style-scope yt-icon">
                            <path
                                d="M16,4v4h4V4H16z M16,10v4h4v-4H16z M10,4v4h4V4H10z M10,10v4h4v-4H10z M16,16v4h4v-4H16z M10,16v4h4v-4H10z M4,4v4h4V4H4z M4,10v4h4v-4H4z M4,16v4h4v-4H4z"
                            ></path>
                        </g>
                    </svg> -->
                </button>
                <button aria-label="Notifications">
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
                </button>
                <button class="profile-picture">
                    <img
                        src="https://yt3.ggpht.com/yti/APfAmoG8vT7NxCVLJTt8SXQeNsPouLB11dVrDjqXoxS75w=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt="PP"
                        width="32"
                        height="32"
                    />
                </button>
            </div>
        </div>
        <!-- <router-link to="/latest-matches"><span>Latest Matches</span></router-link
        > -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
    name: 'App',
    data() {
        return {
            searchInput: '',
        }
    },
    methods: {
        toggleSidemenu() {
            store.commit('toggleSidemenu');
        }
    },
});
</script>
<style lang="less" scoped>
.nav {
    background: transparent;
    height: 56px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
    font-size: 22px;
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #202020;
    .start {
        display: flex;
        .sidemenu-icon {
            width: 24px;
            margin: auto 0;
            padding: 8px;
            cursor: pointer;
        }
        .logo {
            padding-left: 15px;
            display: inline-flex;
            cursor: pointer;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
            img {
                max-width: 30px;
                margin: 10px 3px 7px 0;
            }
            span {
                margin: auto 0;
                font-family: "Oswald", sans-serif;
                font-weight: 400;
                font-size: 20px;
            }
        }
    }
    .middle {
        display: flex;
        -ms-flex: 0 1 728px;
        -webkit-flex: 0 1 728px;
        flex: 0 1 728px;
        min-width: 0px;
        margin-left: 70px;
        min-width: 0;
        .search-container {
            position: relative;
            align-items: center;
            outline: none;
            border: 1px solid hsl(0, 0%, 18.82%);
            border-right: none;
            border-radius: 2px 0 0 2px;
            background: #121212;
            box-shadow: inset 0 1px 2px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 1e-9px;
            flex-basis: 1e-9px;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
            min-width: 0;
            input {
                color: #fff;
                height: 35px;
                outline: none;
                border: 1px solid hsl(0, 0%, 18.82%);
                border-right: none;
                border-radius: 2px 0 0 2px;
                background: #121212;
                padding-left: 10px;
                font-size: 16px;
                flex: 1;
                min-width: 0;
            }
            svg {
                position: absolute;
                top: 0;
                right: 5px;
                width: 20px;
                cursor: pointer;
            }
        }
        button {
            outline: none;
            border: none;
            background: hsla(0, 0%, 100%, 0.08);
            padding: 5px 20px;
            cursor: pointer;
            svg {
                width: 24px;
            }
        }
        .voice-icon {
            margin-left: 10px;
            background: #181818;
            border-radius: 50%;
            padding: 8px;
            cursor: pointer;
        }
    }
    .end {
        min-width: 225px;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
        margin-left: 30px;
        .buttons {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
            .search-icon {
                display: none;
            }
            button {
                background: transparent;
                border: none;
                outline: none;
                padding: 0 12px;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                cursor: pointer;
            }
        }
        .profile-picture {
            padding: 0 20px;
            background: none;
            border: none;
            outline: none;
            max-height: 56px;
            cursor: pointer;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            img {
                border-radius: 50%;
            }
        }
    }
    @media screen and (max-width: 658px) {
        .middle {
            display: none;
        }
        .search-icon {
            display: flex !important;
        }
        .buttons {
            margin-left: 30px;
        }
    }
}
</style>
