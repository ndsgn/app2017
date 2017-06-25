<template>

    <div class="collection-item-time"><span>{{hour}}</span></div>

</template>


<script>
export default {
    name: 'collectionTime',
    props: ['hour'],
    data () {
        return {
        }
    }
}
</script>


<style scoped lang="scss">

    .collection-item-time {
        border-left: none;
        background: #f3f3f3;
        font-size: 14px;
        color: #666;
        padding: 8px 0px 2px 25px;

        @media only screen and (min-width: 660px) {
            padding: 18px 0px 2px 32px;
            background: none; 
            
            span {
                color: #666;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

</style>
