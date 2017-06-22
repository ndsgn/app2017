<template>
  <div class="container">
    <div class="tab-container col s12 m7">

            <div v-for="programItem in programItems"  v-if="activeProgramTab == programItem.tabId" class="col s12 tabsingle">
                <div v-for="programHours in programItem.hours">
                    <div class="collection-item-time"><span>{{programHours.hour}}</span></div>
                    <ul class="collection">
                        <li v-for="programActivity in programHours.activities" class="collection-item" :class="'collection-item-'+programActivity.type">
                            <span class="title">{{programActivity.title}}</span>
                            <p>Das {{programActivity.hourStart}} às {{programActivity.hourEnd}}</p>
                            <a href="" class="secondary-content"><i class="material-icons">star_outline</i></a>
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
    }
  }
</script>


<style scoped lang="scss">
    .container {
        padding: 0;
    }

    .tab-container {
        position: absolute;
        top: 104px;
        left: 0;
        overflow: hidden;
        width: 100vw;
        height: calc(100vh - 104px);
    }
    .tabsingle {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
        height: calc(100vh - 103px);
    }

    .collection {
        margin: 0;
        border: none;
        background: #fff;
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

            .material-icons {
                color: #ccc;
            }
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

    .collection-item-time {
        border-left: none;
        background: #f3f3f3;
        font-size: 14px;
        color: #666;
        padding: 8px 0px 2px 25px;
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
