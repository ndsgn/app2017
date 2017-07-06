<template>
    <div class="navbar-fixed">
        <nav v-bind:class="{ 'nav-extended': useheaderextend  }">
            <div class="nav-wrapper" :class="color">
                <a v-on:click="toggleNavBar()" class="button-collapse" :class="textcolor">
                    <i class="material-icons">menu</i>
                </a>
                
                <ul class="left">
                    <li :class="textcolor" class="nav-header-text">{{headertext}}</li>
                </ul>
                
                <ul class="right">
                    <li>
                        <a v-on:click="refreshContent()">
                            <i class="material-icons" :class="textcolor">cached</i>
                        </a>
                    </li>
                    <li>
                        <router-link to="/search" :class="textcolor">
                            <i class="material-icons">search</i>
                        </router-link>
                    </li>
                </ul>

                <HeaderExtend v-if="useheaderextend"></HeaderExtend>
            </div>

            <transition name="slide">
                <SideNav v-if="showNav"></SideNav>
            </transition>

            <transition name="fade">
                <div class="slide-out-overflow" v-if="showNav" v-on:click="toggleNavBar()"></div>
            </transition>

        </nav>
    </div>
</template>


<script>
import SideNav from '@/components/Shared/SideNav'
import HeaderExtend from '@/components/Shared/HeaderExtend'

export default {
    name: 'header',
    components: {SideNav, HeaderExtend},
    props: ['color', 'textcolor', 'headertext', 'useheaderextend', 'themeColor'],
    data () {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNavBar: function() {
            this.showNav = !this.showNav
        },
        refreshContent: function() {
            location.reload(true);
        }
    },
    beforeRouteLeave (to, from, next) {
        this.showNav = false;
        next();
    }
}
</script>


<style lang="scss">

    nav a.button-collapse {
        cursor: pointer; 

        @media only screen and (min-width: 993px) {
            display: block;
            cursor: pointer;
        }
    }

    .side-nav {
        left: 310px;
    }

    .nav-wrapper {
        .right {
            position: relative;
            z-index: 2;
        }
    }

    .slide-out-overflow {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;
        z-index: 990;
        overflow: hidden;
    }

    .slide-enter-active, .slide-leave-active {
        transition: left .25s
    }
    
    .slide-enter, .slide-leave-to {
        left: 0
    }

    .slide-enter-to, .slide-leave {
        left: 310px;
    }

    .nav-header-text {
        font-size: 20px;
        font-weight: 500;
        position: relative;
        top: 2px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
