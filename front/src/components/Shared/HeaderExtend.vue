<template>
    <div class="nav-content">
        <ul class="tabs tabs-transparent">
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 15'  }" v-on:click="activateTab('Dia 15')" >Dia 15<br><span>SAB</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 16'  }" v-on:click="activateTab('Dia 16')" >Dia 16<br><span>DOM</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 17'  }" v-on:click="activateTab('Dia 17')" >Dia 17<br><span>SEG</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 18'  }" v-on:click="activateTab('Dia 18')" >Dia 18<br><span>TER</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 19'  }" v-on:click="activateTab('Dia 19')" >Dia 19<br><span>QUA</span></a></li>
            <li class="tab"><a v-bind:class="{ 'active': activeProgramTab == 'Dia 20'  }" v-on:click="activateTab('Dia 20')" >Dia 20<br><span>QUI</span></a></li>
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
