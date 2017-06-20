<template>
    <div class="nav-content">
        <ul class="tabs tabs-transparent">
            <li class="tab"><a class="active" href="#test1">Dia 15<br><span>SAB</span></a></li>
            <li class="tab"><a href="#test2">Dia 16<br><span>DOM</span></a></li>
            <li class="tab"><a href="#test3">Dia 17<br><span>SEG</span></a></li>
            <li class="tab"><a href="#test4">Dia 18<br><span>TER</span></a></li>
            <li class="tab"><a href="#test5">Dia 19<br><span>QUA</span></a></li>
            <li class="tab"><a href="#test6">Dia 20<br><span>QUI</span></a></li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'headerExtend',
    data () {
        return {
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


</style>
