<template>
  <div class="container">
    <div class="tab-container col s12 m7">

            <div v-for="programItem in programItems" :key="programItem.tabId"  v-if="activeProgramTab == programItem.tabId" class="col s12 tabsingle">
                <div v-for="programHours in programItem.hours">
                    <div class="collection-item-time" v-if="shouldShowHourLabel(programHours.activities)"><span>{{programHours.hour}}</span></div>
                    
                    <ul class="collection">
                        <li v-for="programActivity in programHours.activities" 
                            v-if="favItems.indexOf(programActivity.id) > -1" 
                            :key="programActivity.id" 
                            class="collection-item" 
                            :class="'collection-item-'+programActivity.type">

                            <span class="title">{{programActivity.title}}</span>
                            <p>Das {{programActivity.hourStart}} às {{programActivity.hourEnd}}</p>

                            <a v-on:click="unfavActivity(programActivity.id)" class="secondary-content orange-text text-lighten-1"><i class="material-icons">star</i></a>
                        </li>
                    </ul>
                </div>
            </div>

    </div>

  </div>
</template>


<script>
export default {
    name: 'program',
    data () {
        return {
        }
    },
    methods: {
        unfavActivity: function(activityId) {
            this.$store.dispatch('unsaveFav', activityId);
        },
        shouldShowHourLabel: function(hourActivities) {
            let shouldShow = false

            //verifica se quaisquer das atividades está favoritada. Se sim, shouldShow vira true, e o horário vai aparecer
            for (let activity of hourActivities) {
                (this.favItems.indexOf(activity.id) > -1) ? shouldShow = true : shouldShow = false
            }

            return shouldShow
        }
    },
    computed: {
        favItems() {
            return this.$store.state.fav;
        },
        programItems() {
            return this.$store.state.program;
        },
        activeProgramTab() {
            return this.$store.state.activeProgramTab;
        }
    },
    created() {
        this.$store.dispatch('getProgram');
        this.$store.dispatch('equalize_fav');
    }
}
</script>


<style scoped lang="scss">
    .container {
        padding: 0;
    }

    .tab-container {
        overflow: hidden;
        height: calc(100vh - 116px);
        margin-top: 51px;

        @media only screen and (max-width: 660px) {
            width: 100vw;
            position: absolute;
            top: 47px;
            left: 0;
        }

    }
    .tabsingle {
        overflow: auto;
        height: calc(100vh - 103px);
        position: relative;
        top: 7px;
    }

    .collection {
        margin: 0;
        border: none;
        background: #fff;

        @media only screen and (min-width: 660px) {
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            margin: 0 5px;
        }
    }

    .collection-item {
        padding: 16px 22px 13px;
        border-left: 5px solid #333;
        border-bottom: none;
        position: relative;

        .secondary-content {
            position: absolute;
            top: 23px;
            right: 16px;
            cursor: pointer;
        }

        span.title {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
        }

        p {
            margin: 0;
        }

        &.collection-item-party {
            span.title {color:#7F6D9A}
            border-color: #7F6D9A;
        }
        &.collection-item-cone {
            span.title {color:#46BBE6}
            border-color: #46BBE6;
        }
        &.collection-item-content {
            span.title {color:#E67A9F}
            border-color: #E67A9F;
        }
        &.collection-item-morning {
            span.title {color:#82A75E}
            border-color: #82A75E;
        }
        &.collection-item-lunch {
            span.title {color:#E19255}
            border-color: #E19255;
        }
        &.collection-item-other {
            span.title {color:#61BBB7}
            border-color: #61BBB7;
        }
        &.collection-item-special {
            span.title {color:#AEAFAE}
            border-color: #AEAFAE;
        }
    }

    .collection-empty {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        p {
            font-weight: 400;
            color: #bbb;
            padding-bottom: 25vh;
        }
    }

    .collection-item-time {
        border-left: none;
        background: #f3f3f3;
        font-size: 14px;
        color: #666;
        padding: 8px 0px 2px 25px;

        @media only screen and (min-width: 660px) {
            padding: 18px 0px 2px 32px;
            background: none; 
            
            span {
                color: #666;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    .slidetab-enter-active, .slidetab-leave-active {
        transition: all .5s
    }
    .slidetab-enter {
        top: 60px;
        opacity: 0;
    }

    .slidetab-leave-to {
        top: -60px;
        opacity: 0;
    }

    .slidetab-enter-to, .slidetab-leave {
        top: 0px;
        opacity: 1;
    }

</style>
