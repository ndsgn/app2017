<template>
  <div class="container">
    <div class="col s12 m7">

        <ul class="collection">
            <li class="collection-item collection-item-header">Alojamento</li>
            <li class="collection-item">Como faz para chegar no alojamento de carro /ônibus?</li>
            <li class="collection-item">Tem hoteis / hostels / pousadas perto do alojamento?</li>
            <li class="collection-item">Há tomadas no alojamento?</li>

            <li class="collection-item collection-item-header">INSCRIÇÕES</li>
            <li class="collection-item">Posso transferir minha inscrição para outra pessoa?</li>
            <li class="collection-item">O que preciso trazer no dia do encontro para efeturar meu credenciamento?</li>
            <li class="collection-item">Vão ser vendidas inscrições diárias para o encontro?</li>

            <li class="collection-item collection-item-header">Alojamento</li>
            <li class="collection-item">Como faz para chegar no alojamento de carro /ônibus?</li>
            <li class="collection-item">Tem hoteis / hostels / pousadas perto do alojamento?</li>
            <li class="collection-item">Há tomadas no alojamento?</li>

            <li class="collection-item collection-item-header">INSCRIÇÕES</li>
            <li class="collection-item">Posso transferir minha inscrição para outra pessoa?</li>
            <li class="collection-item">O que preciso trazer no dia do encontro para efeturar meu credenciamento?</li>
            <li class="collection-item">Vão ser vendidas inscrições diárias para o encontro?</li>

            <li class="collection-item collection-item-header">Alojamento</li>
            <li class="collection-item">Como faz para chegar no alojamento de carro /ônibus?</li>
            <li class="collection-item">Tem hoteis / hostels / pousadas perto do alojamento?</li>
            <li class="collection-item">Há tomadas no alojamento?</li>

            <li class="collection-item collection-item-header">INSCRIÇÕES</li>
            <li class="collection-item">Posso transferir minha inscrição para outra pessoa?</li>
            <li class="collection-item">O que preciso trazer no dia do encontro para efeturar meu credenciamento?</li>
            <li class="collection-item">Vão ser vendidas inscrições diárias para o encontro?</li>
        </ul>
        
    </div>

  </div>
</template>


<script>
  export default {
    name: 'faq',
    data () {
      return {
      }
    }
  }
</script>


<style scoped lang="scss">
    .container {
        padding: 15px 0 30px;
    }

    ul.collection {
        width: 100vw;
        position: absolute;
        top: 48px;
        left: 0;

        li {

            &.collection-item-header {
                font-size: 14px;
                font-weight: 600;
                padding-top: 20px;
                text-transform: uppercase;
            }
        }
    }
</style>
