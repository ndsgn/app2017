<template>

    <div class="activity-card" :class="'activity-card-' + activity.type">

        <transition name="fadeModal">
            <EditActivity 
                v-if="showModal && admin" 
                v-on:closeModal="toggleModal()" 
                :content="activity"
                mode="editing" 
            ></EditActivity>
        </transition>

        <figure style="height: 60px;">
            <!-- <img :src="activity.image" /> -->
            <router-link to="/program" class="activity-card-clear"><i class="material-icons">clear</i></router-link>
        </figure>
        <header>
            <h1>{{activity.title}}</h1>
            <FavStar 
                class="activity-card-fav" 
                :color="color.text" 
                :programActivityId="activityId">
            </FavStar>
        </header>

        <section class="activity-content">
            <h4><i class="material-icons">alarm</i> Horário</h4>
            <p>{{activity.hourStart}} - {{activity.hourEnd}}</p>

            <h4><i class="material-icons">place</i> Local</h4>
            <p>{{activity.place}}</p>

            <h4><i class="material-icons">description</i> Descrição</h4>
            <p>{{activity.description}}</p>

            <h4><i class="material-icons">supervisor_account</i> Ministrantes</h4>
            <p>{{activity.speakers}}</p>

            <br>
            <a v-on:click.prevent="deleteActivity()" v-if="admin" class="waves-effect waves-light btn red accent-4">Apagar atividade</a>
        </section>

        <FloatButton 
            v-if="admin" 
            v-on:action="toggleModal()" 
            :color="color.bg"
            icon="edit">
        </FloatButton>

    </div>

</template>


<script>
import FavStar from '@/components/Shared/FavStar'
import FloatButton from "@/components/Shared/FloatButton"
import EditActivity from "@/components/Shared/EditActivity"

export default {
    name: 'Activity',
    props: ['programActivity'],
    components: {FavStar, FloatButton, EditActivity},
    data () {
        return {
            admin: false,
            showModal: false
        }
    },
    computed: {
        activityId() {
            return this.$route.params.id
        },
        activity() {
            return this.$store.state.activities.find(x => x.id == this.$route.params.id)
        },
        color() {
            if(this.activity.type != undefined) {
                switch(this.activity.type) {
                    case 'party':
                        var obj = {text: 'deep-purple-text text-darken-4', bg: 'deep-purple darken-4'}
                        return obj
                        break
                    case 'cone':
                        var obj = {text: 'light-blue-text text-darken-3', bg: 'light-blue darken-3'}
                        return obj
                        break
                    case 'content':
                        var obj = {text: 'red-text text-darken-3', bg: 'red darken-3'}
                        return obj
                        break
                    case 'morning':
                        var obj = {text: 'grey-text text-darken-3', bg: 'grey darken-3'}
                        return obj
                        break
                    case 'lunch':
                        var obj = {text: 'deep-orange-text text-darken-2', bg: 'deep-orange darken-2'}
                        return obj
                        break
                    case 'other':
                        var obj = {text: 'teal-text text-darken-4', bg: 'teal darken-4'}
                        return obj
                        break
                    case 'special':
                        var obj = {text: 'grey-text text-darken-3', bg: 'grey darken-3'}
                        return obj
                        break
                    default:
                        var obj = {text: 'orange-text text-lighten-1', bg: 'orange lighten-1'}
                        return obj
                }
            }
        }
    },
    methods: {
        closeActivity: function() {
            this.$emit('close')
        },
        toggleModal: function() {
            this.showModal = !this.showModal;
        },
        deleteActivity: function() {
            this.$store.dispatch('deleteActivity', this.activity);
        }
    },
    created() {
        this.admin = this.$store.state.isAdmin;
    }
}
</script>


<style scoped lang="scss">
    .activity-card {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5001;
        width: 100vw;
        height: 100vh;
        background: #fff;

        @media only screen and (min-width: 850px) {
            top: 60px;
            left: calc(50vw - 400px);
            width: 800px;
            min-height: 81vh;
            box-shadow: 0px 15px 125px 5px rgba(0,0,0,0.5);
        }

        figure {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 30vh;
            overflow: hidden;

            img {
                width: 100%;
                min-width: 100%;
                min-height: 100%;
            }

            .activity-card-clear {
                position: absolute;
                top: 15px;
                left: 10px;

                i {
                    font-size: 30px;
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }

        header {
            width: 100%;
            padding: 30px 15px;
            position: relative;
            
            h1 {
                margin: 0;
                padding: 0;
                color: rgba(0,0,0,0.8);
                font-size: 22px;
                font-weight: 500;
            }
        }

        &.activity-card-party {
            header {background-color: #7F6D9A}
            figure {background-color: rgba(127, 109, 154, 0.6)}
        }
        &.activity-card-cone {
            header {background-color: #46BBE6}
            figure {background-color: rgba(70, 187, 230, 0.6)}
        }
        &.activity-card-content {
           header {background-color: #E67A9F}
           figure {background-color: rgba(230, 122, 159, 0.6)}
        }
        &.activity-card-morning {
           header {background-color: #82A75E}
           figure {background-color: rgba(130, 167, 94, 0.6)}
        }
        &.activity-card-lunch {
           header {background-color: #E19255}
           figure {background-color: rgba(225, 146, 85, 0.6)}
        }
        &.activity-card-other {
           header {background-color: #61BBB7}
           figure {background-color: rgba(97, 187, 183, 0.6)}
        }
        &.activity-card-special {
           header {background-color: #AEAFAE}
           figure {background-color: rgba(174, 175, 174, 0.6)}
        }
    }

    .activity-card-fav {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .activity-content {
        padding: 17px;
        height: calc(70vh - 90px);
        overflow: auto;
        padding-bottom: 75px;

        h4 {
            font-size: 12px;
            font-weight: bold;
            line-height: 1.42;
            letter-spacing: 2px;
            text-align: left;
            color: #999999;
            margin: 0;

            i {
                position: relative;
                top: 7px;
                left: -2px;
            }
        }

        p {
            font-size: 13px;
            line-height: 16px;
            color: #666666;
            margin: 8px 0;
        }
    }
</style>
