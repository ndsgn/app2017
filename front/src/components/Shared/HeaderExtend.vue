<template>
    <div class="nav-content">
        <ul class="tabs tabs-transparent">
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab1'  }" v-on:click="activateTab('tab1')" >Dia 15<br><span>SAB</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab2'  }" v-on:click="activateTab('tab2')" >Dia 16<br><span>DOM</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab3'  }" v-on:click="activateTab('tab3')" >Dia 17<br><span>SEG</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab4'  }" v-on:click="activateTab('tab4')" >Dia 18<br><span>TER</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab5'  }" v-on:click="activateTab('tab5')" >Dia 19<br><span>QUA</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'tab6'  }" v-on:click="activateTab('tab6')" >Dia 20<br><span>QUI</span></a></li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'headerExtend',
    data () {
        return {
        }
    },
    computed: {
        activeProgramTab() {
            return this.$store.state.activeProgramTab;
        }
    },
    methods: {
         activateTab: function(targetTab) {
             this.$store.dispatch('activateTab', targetTab);
         }
    }
}
</script>


<style scoped lang="scss">

    .tabs .tab a {
        line-height: 20px;

        span {
            font-size: 20px;
            font-weight: 300;
        }
    }

    .tabs .tab a:hover, .tabs .tab a.active {
        //border-bottom: 3px solid #fff;
    }

</style>
