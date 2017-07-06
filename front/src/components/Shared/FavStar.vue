<template>

    <div>
        <a v-if="favedActivities.indexOf(programActivityId) == -1" 
            v-on:click="favActivity(programActivityId)" 
            class="secondary-content" :class="useColors"><i class="material-icons">star_outline</i>
        </a>
        <a v-else 
            v-on:click="unfavActivity(programActivityId)" 
            class="secondary-content" :class="useColors"><i class="material-icons">star</i>
        </a>
    </div>

</template>


<script>
export default {
    name: 'floatbutton',
    props: ['programActivityId', 'color'],
    data () {
        return {
        }
    },
    methods: {
        favActivity: function(activityId) {
            this.$store.dispatch('saveFav', activityId);
        },
        unfavActivity: function(activityId) {
            this.$store.dispatch('unsaveFav', activityId);
        }
    },
    computed: {
        favedActivities() {
            return this.$store.state.fav;
        },
        useColors() {
            return this.color && this.color != '' ? this.color : 'orange-text text-lighten-1'
        }
    }
}
</script>


<style scoped lang="scss">

    .secondary-content {
        position: absolute;
        top: 23px;
        right: 16px;
        cursor: pointer;
    }

</style>
