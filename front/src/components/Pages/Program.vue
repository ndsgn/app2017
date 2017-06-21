<template>
  <div class="container">
    <div class="tab-container col s12 m7">

        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab1'" class="col s12 tabsingle">
                <img src="http://images.boats.com/resize/1/72/41/6077241_20170120112356443_1_LARGE.jpg?w=600&h=600" class="responsive-img" />
                <img src="http://images.boats.com/resize/1/94/62/6099462_20170320133308598_1_LARGE.jpg?w=600&h=600" class="responsive-img" />
            </div>
        </transition>
        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab2'" class="col s12 tabsingle">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg" class="responsive-img" />
                <img src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" class="responsive-img" />
                <img src="http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-460x290.jpg" class="responsive-img" />
            </div>
        </transition>
        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab3'" class="col s12 tabsingle">
                <img src="http://ichef.bbci.co.uk/images/ic/1600xn/p03vfmdq.jpg" class="responsive-img" />
                <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/0CB0/production/_89284230_planepa.jpg" class="responsive-img" />
                <img src="https://s-media-cache-ak0.pinimg.com/originals/38/6a/64/386a640b910da0cd8662432f68e5e51f.jpg" class="responsive-img" />
            </div>
        </transition>
        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab4'" class="col s12 tabsingle">
                <img src="https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TB8_870_hero" class="responsive-img" />
                <img src="http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwdedbeb5f/images/hi-res/84810_GLHG.jpg?sw=300&sh=300&sfrm=png" class="responsive-img" />
                <img src="http://s7d5.scene7.com/is/image/ColumbiaSportswear2/1585911_427_f?$COL_grid$" class="responsive-img" />
            </div>
        </transition>
        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab5'" class="col s12 tabsingle">
                <img src="https://qph.ec.quoracdn.net/main-qimg-bd144175354c60b45ddef16ca13716f0-c" class="responsive-img" />
                <img src="https://media.mnn.com/assets/images/2014/08/babies-LEAD.jpg.500x0_q80_crop-smart_upscale-true.jpg" class="responsive-img" />
                <img src="https://s-media-cache-ak0.pinimg.com/originals/d8/6b/68/d86b6806922c62cb8893c4cc43a1f357.jpg" class="responsive-img" />
            </div>
        </transition>
        <transition name="slidetab">
            <div v-if="activeProgramTab == 'tab6'" class="col s12 tabsingle">
                <img src="https://cdn.shopify.com/s/files/1/0191/7620/products/para1.jpg?v=1389643042" class="responsive-img" />
                <img src="http://demandware.edgesuite.net/aapr_prd/on/demandware.static/-/Sites-payless-catalog/default/dw52efeebb/images/hi-res/163525_6_1400x1400.jpg" class="responsive-img" />
                <img src="http://demandware.edgesuite.net/aaew_prd/on/demandware.static/-/Sites-masterCatalog_Bootbarn/default/dwbe7a03dd/large/Ariat_15770_15.jpg" class="responsive-img" />
            </div>
        </transition>
        
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
        news() {
            return this.$store.state.news;
        },
        activeProgramTab() {
            return this.$store.state.activeProgramTab;
        }
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
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
        height: calc(100vh - 103px);
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
