<template>
  <div class="container">
    <div class="tab-container col s12 m7">

        <div 
            v-for="programItem in programItems" 
            v-if="activeProgramTab == programItem.tabId" 
            :key="programItem.tabId"  
            class="col s12 tabsingle">
            
            <div 
                v-for="programHours in programItem.hours" 
                :key="programHours.hour">

                <CollectionTime 
                    v-if="shouldShowHourLabel(programHours.activities)" 
                    :hour="programHours.hour">
                </CollectionTime>

                <ul class="collection">
                    <CollectionItem  
                        v-for="programActivity in programHours.activities" 
                        v-if="favItems.indexOf(programActivity.id) > -1" 
                        :programActivity="programActivity" 
                        :key="programActivity.id" >
                    </CollectionItem>
                </ul>

            </div>
        </div>

    </div>

  </div>
</template>


<script>
import CollectionItem from "@/components/Shared/CollectionItem"
import CollectionTime from "@/components/Shared/CollectionTime"

export default {
    name: 'program',
    components: {CollectionItem, CollectionTime},
    data () {
        return {
        }
    },
    methods: {
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

</style>
