<template>
  <div class="container">
    <div class="tab-container col s12 m7">

        <transition name="fadeModal">
            <EditActivity 
                v-if="showModal && admin" 
                v-on:closeModal="toggleModal()" 
                mode="adding" 
            ></EditActivity>
        </transition>

        <transition name="slideActivity">
            <Activity v-if="showActivity"></Activity>
        </transition>

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
                        v-if="activity.hourStart == hour" 
                        :key="activity.id"  
                        :programActivity="activity">
                    </CollectionItem>
                </ul>

            </div>
        </div>

        <FloatButton 
            v-if="admin" 
            v-on:action="toggleModal()" 
            color="red lighten-2"
            icon="add">
        </FloatButton>

    </div>

  </div>
</template>


<script>

import CollectionItem from "@/components/Shared/CollectionItem"
import CollectionTime from "@/components/Shared/CollectionTime"
import FloatButton from "@/components/Shared/FloatButton"
import EditActivity from "@/components/Shared/EditActivity"
import Activity from "@/components/Shared/Activity"

export default {
    name: 'program',
    components: {CollectionItem, CollectionTime, FloatButton, EditActivity, Activity},
    data () {
        return {
            admin: false,
            showModal: false
        }
    },
    methods: {
        toggleModal: function() {
            this.showModal = !this.showModal;
        }
    },
    computed: {
        activeProgramTab() {
            return this.$store.state.activeProgramTab
        },
        activities() {
            return this.$store.state.activities
        },
        tabActivities() {
            return this.$store.state.activities.filter(activity => activity.date == this.activeProgramTab)
        },
        hours() {
            let hours = []
            this.tabActivities.forEach(function(item){
                hours.indexOf(item.hourStart) > -1 ? false : hours.push(item.hourStart)
            })
            return hours
        },
        showActivity() {
            return (this.$route.params && this.$route.params.id) ? true : false
        }
    },
    created() {
        this.$store.dispatch('getActivities');
        this.$store.dispatch('equalize_fav');
        this.admin = this.$store.state.isAdmin;
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


    .fadeModal-enter-active, .fadeModal-leave-active {
        transition: all .25s
    }
    .fadeModal-enter, .fadeModal-leave-to {
        opacity: 0;
    }


    .slideActivity-enter-active, .slideActivity-leave-active {
        transition: all 0.25s ease-out;
        top: 0;
    }
    .slideActivity-enter, .slideActivity-leave-to {
        opacity: 0;
        top: 30px !important;
    }

</style>
