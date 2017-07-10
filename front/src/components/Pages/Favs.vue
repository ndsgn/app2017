<template>
  <div class="container">
    <div class="tab-container col s12 m7">

        <div class="col s12 tabsingle">
            
            <!-- pega da array de horários em `hours` 
            e pra cada horário mostra as aticidades daquele horário -->
            <div v-for="(hour, index) in hours" :key="index">

                <CollectionTime 
                    :hour="hour">
                </CollectionTime>

                <ul class="collection">
                    <CollectionItem  
                        v-for="activity in tabActivities" 
                        v-if="favItems.indexOf(activity.id) > -1 && activity.hourStart == hour" 
                        :key="activity.id"  
                        :programActivity="activity">
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
    methods: {},
    computed: {
        favItems() {
            return this.$store.state.fav;
        },
        activeProgramTab() {
            return this.$store.state.activeProgramTab
        },
        activities() {
            return this.$store.state.activities
        },
        tabActivities() {
            //returns only activities from that tab and that is on faved
            return this.$store.state.activities.filter(activity => activity.date == this.activeProgramTab && this.favItems.indexOf(activity.id) > -1)
        },
        hours() {
            let hours = []
            this.tabActivities.forEach(function(item){
                hours.indexOf(item.hourStart) > -1 ? false : hours.push(item.hourStart)
            })
            return hours
        }
    },
    created() {
        this.$store.dispatch('getActivities');
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
