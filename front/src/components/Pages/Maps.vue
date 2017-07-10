<template>
  <div class="container container-maps">
    <div class="col s12 m8">

        <figure id="map">
          <img src="/static/img/map.png" />
        </figure>

        <nav class="blue lighten-2 bottom-navbar">
          <div class="nav-wrapper">
            <div class="input-field">
              <select>
                <option value="" disabled selected>Selecione um local</option>
                <option v-for="place in places" :key="place" value="1">{{place}}</option>
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
        places: [
          '1 - Palco Principal',
          '2 - Arena',
          '3 - Roda de Conversa 1 ',
          '4 - Roda de conversa 2 ',
          '5 - Sala de Projeção',
          '6 - Instalação 1',
          '7 - Mini Palco 1 ',
          '8 - Mini Palco 2 ',
          '9 - Ateliê ',
          '10 - Sala Multi 1 ',
          '11 - Mini Palco 3 ',
          '12 - Fab Lab ',
          '13 - Instalação',
          '14 - Sala Multi 2 ',
          '15 - Laboratório de Impressão',
          '16 - Sala Multi 3 ',
          '17 - Sala do CoNE',
          '18 - Instalação',
          '19 - Mini Palco 4 ',
          '20 - Studio',
          '21 - Sala do Silêncio',
          '22 - Cozinha / Refeitório',
          '23 - Espaço de Convivência',
          '24 - Bazar',
          '25 - Praça de Alimentação',
          '26 - Gramados',
          '27 - Alojamento',
          '28 - Exposições livres',
          'WC - banheiros',
          'C - Chuveiros',
          'M - Mercado',
          'P - Ponto de Encontro',
          'IF - Grade, Grade preencha e Mapa',
          'D - Docas',
          'E - Entrada',
          'A - Almoxarifado',
        ]
      }
    },
    mounted: function() {
        $(document).ready(function() {
            $('select').material_select();
        });
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

        img {
          max-height: 150%;
        }
      }

      .bottom-navbar {
        position: fixed;
        bottom: 0;
        padding: 5px 15px 0;

        input.select-dropdown {
            border-color: white !important;
        }
      }
    }
</style>
