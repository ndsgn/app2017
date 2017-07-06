<template>

    <li class="collection-item" :class="'collection-item-'+programActivity.type">
        <router-link 
            :to="'/program/activity/'+ programActivity.id" 
            class="collection-item-link">
        </router-link>
        
        <span class="title">{{programActivity.title}}</span>
        <p>Das {{programActivity.hourStart}} às {{programActivity.hourEnd}}</p>

        <FavStar :programActivityId="programActivity.id"></FavStar>
    </li>

</template>


<script>
import FavStar from '@/components/Shared/FavStar'

export default {
    name: 'collectionItem',
    props: ['programActivity'],
    components: {FavStar},
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
        },
        showActivity:function() {
            this.$emit('showActivity')
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

        span.title {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
        }

        a.collection-item-link {
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% - 60px);
            height: 100%;
        }

        p {
            margin: 0;
        }

        &.collection-item-party {
            span.title, span.title a {color:#7F6D9A}
            border-color: #7F6D9A;
        }
        &.collection-item-cone {
            span.title, span.title a {color:#46BBE6}
            border-color: #46BBE6;
        }
        &.collection-item-content {
            span.title, span.title a {color:#E67A9F}
            border-color: #E67A9F;
        }
        &.collection-item-morning {
            span.title, span.title a {color:#82A75E}
            border-color: #82A75E;
        }
        &.collection-item-lunch {
            span.title, span.title a {color:#E19255}
            border-color: #E19255;
        }
        &.collection-item-other {
            span.title, span.title a {color:#61BBB7}
            border-color: #61BBB7;
        }
        &.collection-item-special {
            span.title, span.title a {color:#AEAFAE}
            border-color: #AEAFAE;
        }
    }

</style>
