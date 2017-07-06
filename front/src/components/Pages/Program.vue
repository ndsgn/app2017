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
                    :hour="programHours.hour">
                </CollectionTime>
                
                <ul class="collection">
                    <CollectionItem  
                        v-for="programActivity in programHours.activities" 
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

import CollectionItem from "../Shared/CollectionItem"
import CollectionTime from "../Shared/CollectionTime"

export default {
    name: 'program',
    components: {CollectionItem, CollectionTime},
    data () {
        return {}
    },
    methods: {},
    computed: {
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
        height: calc(100vh - 110px);
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

</style>
