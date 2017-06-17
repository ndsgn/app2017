<template>
  <div>
    <h2 class="mdc-typography--display2">{{ msg }}</h2>
    <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
      <input type="text" class="mdc-textfield__input" id="demo-input">
      <label for="demo-input" class="mdc-textfield__label">Tell us how you feel!</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
