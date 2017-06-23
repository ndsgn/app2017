<template>
  <div class="container">
    <div class="col s12 m7">

        <h5>EMERGÊNCIAS</h5>

        <p><span>190</span> Polícia Militar</p>
        <p><span>192</span> SAMU</p>
        <p><span>193</span> Corpo de Bombeiros</p>

        <h5>COMIDAS & BARES</h5>

        <p><span>3522-8746</span> Pizzaria Gourmet</p>
        <p><span>3548-4125</span> Bar do Seu Juca</p>
        <p><span>3856-9799</span> Habbib's CIC</p>
        
    </div>

  </div>
</template>


<script>
  export default {
    name: 'phones',
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

    h5 {
        font-size: 14px;
        font-weight: 600;
        margin: 30px 0 15px;
    }

    p {
        font-size: 14px;
        color: #666;
        margin: 2px 0;

        span {
            font-size: 25px;
            font-weight: 500;
            color: #666;
            position: relative;
            top: 3px;
            padding-right: 16px;
        }
    }
</style>
