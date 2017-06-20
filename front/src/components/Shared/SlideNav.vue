<template>

    <div>

        <transition name="slide">
            <ul id="slide-out" class="side-nav" v-if="showNav">
                <li>
                    <div class="userView">
                        <div class="background">
                            <img src="images/office.jpg">
                        </div>
                        <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
                        <a href="#!name"><span class="white-text name">John Doe</span></a>
                        <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
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

    </div>
</template>


<script>
export default {
    name: 'slideNav',
}
</script>


<style lang="scss">
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
</style>
