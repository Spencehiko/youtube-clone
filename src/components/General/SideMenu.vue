<template>
    <div class="sidemenu" v-if="showSidemenu">
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
        <div class="items">
            <button class="active">
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
                    </g>
                </svg>
                <span>Home</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
                        ></path>
                    </g>
                </svg>
                <span>Explore</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                        ></path>
                    </g>
                </svg>
                <span>Subscriptions</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
                        ></path>
                    </g>
                </svg>
                <span>Originals</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                        ></path>
                    </g>
                </svg>
                <span>HikoTube Music</span>
            </button>
            <hr class="solid" />
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                        ></path>
                    </g>
                </svg>
                <span>Library</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                        ></path>
                    </g>
                </svg>
                <span>History</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
                        ></path>
                    </g>
                </svg>
                <span>Your videos</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                        ></path>
                    </g>
                </svg>
                <span>Watch later</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
                        ></path>
                    </g>
                </svg>
                <span>Downloads</span>
            </button>
            <button>
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <g>
                        <path
                            d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                        ></path>
                    </g>
                </svg>
                <span>Liked videos</span>
            </button>
            <hr class="solid" />
            <div class="subscriptions">
                <h3>SUBSCRIPTIONS</h3>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
    name: 'App',
    data() {
        return {
            showSidemenu: true,
        }
    },
    methods: {
        toggleSidemenu() {
            store.commit('toggleSidemenu');
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
.sidemenu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #212121;
    width: 240px;
    transition-duration: 200ms;
    transform: all 1s;
    .start {
        display: flex;
        background: #202020;
        height: 46px;
        padding: 4.5px 16px;
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
    .items {
        margin-top: 10px;
        button {
            display: flex;
            background: transparent;
            outline: none;
            border: none;
            width: 100%;
            align-items: center;
            height: 40px;
            padding: 0 24px;
            cursor: pointer;
            &:hover {
                background: #383838;
            }
            &.active {
                background: #383838;
            }
            svg {
                margin: auto 0;
                margin-right: 24px;
            }
            span {
                margin: auto 0;
                color: #fff;
                font-family: "Roboto", "Arial", sans-serif;
                font-size: 14px;
                line-height: 2rem;
                font-weight: 500;
            }
        }
        hr.solid {
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin: 12px 0;
        }
        .subscriptions {
            h3 {
                color: #aaa;
                padding: 8px 24px;
                font-size: 14px;
            }
        }
    }
}
</style>
