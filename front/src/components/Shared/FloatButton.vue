<template>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large z-depth-3" @click="doAction()" :class="color">
            <i class="large material-icons">{{icon}}</i>
        </a>
    </div>

</template>


<script>
export default {
    name: 'floatbutton',
    props: ['icon', 'color'],
    data () {
        return {
        }
    },
    methods: {
        doAction: function() {
            this.$emit('action')
        }
    }
}
</script>


<style scoped lang="scss">

    .btn-large {
        padding: 0 !important;
    }

</style>
