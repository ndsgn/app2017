<template>

    <div class="activity-card" :class="'activity-card-' + activity.type">
        <figure>
            <img :src="activity.image" />
            <router-link to="/program" class="activity-card-clear"><i class="material-icons">clear</i></router-link>
        </figure>
        <header>
            <h1>{{activity.title}}</h1>
            <FavStar 
                class="activity-card-fav" 
                :color="starColor" 
                :programActivityId="activityId">
            </FavStar>
        </header>
    </div>

</template>


<script>
import FavStar from '@/components/Shared/FavStar'

export default {
    name: 'Activity',
    props: ['programActivity'],
    components: {FavStar},
    data () {
        return {
        }
    },
    computed: {
        activityId() {
            return parseInt(this.$route.params.id)
        },
        activity() {
            return this.$store.state.activities.find(x => x.id == this.$route.params.id);
        },
        starColor() {
            switch(this.activity.type) {
                case 'party':
                    return 'deep-purple-text text-darken-4'
                    break
                case 'cone':
                    return ' light-blue-text text-darken-3'
                    break
                case 'content':
                    return 'red-text text-darken-3'
                    break
                case 'morning':
                    return 'grey-text text-darken-3'
                    break
                case 'lunch':
                    return 'deep-orange-text text-darken-2'
                    break
                case 'other':
                    return  'teal-text text-darken-4'
                    break
                case 'special':
                    return 'grey-text text-darken-3'
                    break
                default:
                    return 'orange-text text-lighten-1'
            }
        }
    },
    methods: {
        closeActivity: function() {
            this.$emit('close')
        }
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
        min-height: 100vh;
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
</style>
