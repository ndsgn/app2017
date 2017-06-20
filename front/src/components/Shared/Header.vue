<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper" :class="color">
                <a v-on:click="toggleNavBar()" class="button-collapse" :class="textcolor">
                    <i class="material-icons">menu</i>
                </a>
                
                <ul class="left">
                    <li :class="textcolor" class="nav-header-text">Notícias & Informes</li>
                </ul>
                
                <ul class="right">
                    <li>
                        <router-link to="/search" :class="textcolor">
                            <i class="material-icons">search</i>
                        </router-link>
                    </li>
                </ul>
            </div>

            <transition name="slide">
                <ul id="slide-out" class="side-nav" v-if="showNav">
                    <li>
                        <div class="userView grey lighten-2">
                            <p class="userinfo grey-text text-darken-3"><strong>{{username}}</strong><br>{{useremail}}</p>
                            <button v-on:click="logout()" class="waves-effect waves-light btn-flat grey lighten-1 grey-text text-darken-4">SAIR</button>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </transition>

            <transition name="fade">
                <div class="slide-out-overflow" v-if="showNav" v-on:click="toggleNavBar()"></div>
            </transition>

        </nav>
    </div>
</template>


<script>
export default {
    name: 'app',
    props: ['color', 'textcolor'],
    data () {
        return {
            showNav: false
        }
    },
    computed: {
        username() {
            return this.$store.state.username;
        },
        useremail() {
            return this.$store.state.useremail;
        }
    },
    methods: {
        toggleNavBar: function() {
            this.showNav = !this.showNav
        },
        logout: function() {
            this.$router.push({ path: '/' })
        }
    },
    mounted () {
    }
}
</script>


<style scoped lang="scss">
    .side-nav {
        left: 310px;
    }
    .slide-out-overflow {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;
        z-index: 990;
    }
    .nav-header-text {
        font-size: 20px;
        font-weight: 500;
        position: relative;
        top: 2px;
    }

    .slide-enter-active, .slide-leave-active {
        transition: left .5s
    }
    .slide-enter, .slide-leave-to {
        left: 0
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }

    p.userinfo {
        line-height: 25px;
        padding-bottom: 5px;

        strong {
            font-weight: 600;
        }
    }

    .btn-flat {
        min-width: auto;
    }
</style>
