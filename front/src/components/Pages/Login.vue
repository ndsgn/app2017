<template>
  <div class="container">
    
    <div class="row">
      <figure class="logo valign-wrapper">
        <img class="responsive-img" src="/static/img/logo.png" />
      </figure>
      <h1 class="logo-legend center-align">O App oficial!</h1>
    </div>

    <div class="row">
      <div class="col s2">&nbsp;</div>
      <form class="col s8">
        <div class="row">
          <div class="input-field col s12">
            <input value="" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12 center-align">
            <router-link to="/news" class="waves-effect waves-light btn-flat grey lighten-3 grey-text text-darken-4">ENTRAR</router-link>
            <p class="center-align"><a href="#">Esqueceu sua senha?</a></p>
          </div>
        </div>
      </form>
    </div>

    <div class="row">
      <div class="col s2">&nbsp;</div>
      <div class="col s8 center-align">
        <p class="center-align">Ainda não tem conta?</p>
        <a class="waves-effect waves-light btn-flat grey lighten-3 grey-text text-darken-4">REGISTRAR</a>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    }
  }
</script>


<style scoped lang="scss">

  .logo {
    padding: 15px 0 0;
    height: 20vh;
    justify-content: center;
  }

  h1.logo-legend {
    color: #f0888e; 
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .input-field {
    margin-top: 0;
  }

  input[type='email'], input[type='password'], label {
    text-align: center;
    left: 0 !important;
    font-size: 16px;
  }

  p {
    margin-top: 20px;
    color: #999;

    a {
      color: #999;
      border-bottom: 2px solid #fcd432;
    }
  }

</style>
