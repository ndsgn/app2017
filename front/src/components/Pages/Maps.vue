<template>
  <div class="container container-maps" v-on:mousemove="getCoord()">
    <div class="col s12 m8">

        <div class="mousePosition">{{coord.x}} - {{coord.y}} | moveTo: {{moveTo}}</div>

        <figure id="map">
          <img src="/static/img/target.svg" class="pointer" style="left: 0px; top: 0px">
          <img src="/static/img/map.png" id="mapimg">
        </figure>

        <nav class="blue lighten-2 bottom-navbar">
          <div class="nav-wrapper">
            <div class="input-field">
              <select v-model="moveTo" v-on:change="moveMap()" name="selectPoint" id="selectPoint">
                <option value="" disabled>Selecione um local</option>
                <option v-for="place in places" :key="place.id" :value="place.id">{{place.id}} - {{place.name}}</option>
              </select>
            </div>
          </div>
        </nav>
        
    </div>

  </div>
</template>


<script>
  export default {
    name: 'map',
    data () {
      return {
        coord: {
          x: 0,
          y: 0
        },
        moveTo: '',
        places: [
          {
            id: 1,
            name: 'Palco Principal',
            coord: [804, 593]
          },
          {
            id: 2,
            name: 'Arena',
            coord: [286, 554]
          },
          {
            id: 3,
            name: 'Roda de Conversa 1 ',
            coord: [409, 509]
          },
          {
            id: 4,
            name: 'Roda de conversa 2 ',
            coord: [425, 659]
          },
          {
            id: 5,
            name: 'Sala de Projeção',
            coord: [641, 438]
          },
          {
            id: 6,
            name: 'Instalação 1',
            coord: [572, 393]
          },
          {
            id: 7,
            name: 'Mini Palco 1 ',
            coord: [492, 422]
          },
          {
            id: 8,
            name: 'Mini Palco 2 ',
            coord: [371, 413]
          },
          {
            id: 9,
            name: 'Ateliê ',
            coord: [274, 416]
          },
          {
            id: 10,
            name: ' Sala Multi 1 ',
            coord: [120, 403]
          },
          {
            id: 11,
            name: 'Mini Palco 3 ',
            coord: [183, 622]
          },
          {
            id: 12,
            name: 'Fab Lab ',
            coord: [273, 792]
          },
          {
            id: 13,
            name: 'Instalação',
            coord: [321, 748]
          },
          {
            id: 14,
            name: 'Sala Multi 2 ',
            coord: [361, 780]
          },
          {
            id: 15,
            name: 'Laboratório de Impressão',
            coord: [433, 782]
          },
          {
            id: 16,
            name: 'Sala Multi 3 ',
            coord: [489, 759]
          },
          {
            id: 17,
            name: 'Sala do CoNE',
            coord: [523, 754]
          },
          {
            id: 18,
            name: 'Instalação',
            coord: [500, 814]
          },
          {
            id: 19,
            name: 'Mini Palco 4 ',
            coord: [656, 790]
          },
          {
            id: 20,
            name: 'Studio',
            coord: [402, 732]
          },
          {
            id: 21,
            name: 'Sala do Silêncio',
            coord: [413, 727]
          },
          {
            id: 22,
            name: 'Cozinha / Refeitório',
            coord: [1646, 568]
          },
          {
            id: 23,
            name: 'Espaço de Convivência',
            coord: [705, 620]
          },
          {
            id: 24,
            name: 'Bazar',
            coord: [622, 669]
          },
          {
            id: 25,
            name: 'Praça de Alimentação',
            coord: [1489, 562]
          },
          {
            id: 26,
            name: 'Gramados',
            coord: [599, 152]
          },
          {
            id: 27,
            name: 'Alojamento',
            coord: [1111, 598]
          },
          {
            id: 28,
            name: 'Exposições livres',
            coord: [768, 687]
          },
          {
            id: 'WC' ,
            name: 'Banheiros',
            coord: [75, 629]
          },
          {
            id: 'C',
            name: 'Chuveiros',
            coord: [1623, 284]
          },
          {
            id: 'M',
            name: 'Mercado',
            coord: [1589, 447]
          },
          {
            id: 'P',
            name: 'Ponto de Encontro',
            coord: [562, 571]
          },
          {
            id: 'IF',
            name: 'Grade, Grade preencha e Mapa',
            coord: [622, 579]
          },
          {
            id: 'D',
            name: 'Docas',
            coord: [1345, 591]
          },
          {
            id: 'E',
            name: 'Entrada',
            coord: [1507, 1001]
          },
          {
            id: 'A',
            name: 'Almoxarifado',
            coord: [928, 799]
          }
        ]
      }
    },
    methods: {
      getCoord: function() {
          var rect = document.getElementById('mapimg').getBoundingClientRect();
          this.coord.x = event.clientX - rect.left
          this.coord.y = event.clientY - rect.top
      },
      moveMap: function() {
        var moveTo = this.places.find(place => place.id == this.moveTo)
        console.log(moveTo.coord)
        $('#map').scrollLeft(moveTo.coord[0] - 150)
        $('#map').scrollTop(moveTo.coord[1] - 150)

        $('.pointer').css({
          left: moveTo.coord[0] - 67,
          top: moveTo.coord[1] - 50
        }).show()
      }
    },
    mounted: function() {
        
    },
  }
</script>


<style lang="scss">
    .container.container-maps {
      padding: 0;
      margin: 0;
      width: 100%;
      height: calc(100vh - 100px);
      overflow: hidden;

      figure {
        margin: 0;
        padding: 0;
        width: 100%;
        height: calc(100vh - 100px);
        overflow: auto;
        position: relative;

        img {
          max-height: 1200px;
        }
      }

      .bottom-navbar {
        position: fixed;
        bottom: 0;
        padding: 5px 15px 0;

        select {
          background: none;
          width: 100%;
          padding: 5px;
          border: none;
          display: block !important;
          border-radius: 2px;
          height: 3rem;
          color: #222;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .pointer {
      position: absolute;
      top: -100px;
      left: -100px;
      animation-duration: 1s;
      animation-name: slidein;
      animation-iteration-count: infinite;
      display: none;

      @keyframes slidein {
        0% {width: 60px;}
        50% {width: 50px;}
        100% {width: 60px;}
      }
    }

    .mousePosition {
      position: fixed;
      right: 0;
      top: 60px;
      background: rgba(255,255,255,0.8);
      padding: 15px;
      z-index: 1000
    }
</style>
