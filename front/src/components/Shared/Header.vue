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
                    <li><i class="material-icons" :class="textcolor">cached</i></li>
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
import SideNav from './SideNav'
import HeaderExtend from './HeaderExtend'

export default {
    name: 'header',
    components: {SideNav, HeaderExtend},
    props: ['color', 'textcolor', 'headertext', 'useheaderextend'],
    data () {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNavBar: function() {
            this.showNav = !this.showNav
        }
    },
    beforeRouteLeave (to, from, next) {
        this.showNav = false;
        next();
    }
}
</script>


<style scoped lang="scss">

    .slide-out-overflow {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;
        z-index: 990;
    }

    .slide-enter-active, .slide-leave-active {
        transition: left .25s
    }
    .slide-enter, .slide-leave-to {
        left: 0
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
