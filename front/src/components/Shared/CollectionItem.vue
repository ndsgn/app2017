<template>

    <li class="collection-item" :class="'collection-item-'+programActivity.type">
        <span class="title">{{programActivity.title}}</span>
        <p>Das {{programActivity.hourStart}} às {{programActivity.hourEnd}}</p>

        <a v-if="favedActivities.indexOf(programActivity.id) == -1" 
            v-on:click="favActivity(programActivity.id)" 
            class="secondary-content grey-text text-lighten-1"><i class="material-icons">star_outline</i>
        </a>
        <a v-else 
            v-on:click="unfavActivity(programActivity.id)" 
            class="secondary-content orange-text text-lighten-1"><i class="material-icons">star</i>
        </a>
    </li>

</template>


<script>
export default {
    name: 'collectionItem',
    props: ['programActivity'],
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
        }
    }
}
</script>


<style scoped lang="scss">

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

</style>
