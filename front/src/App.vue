<template>
  <div id="app">
    
    <!-- ncwb2017_2.surge.sh -->
    <router-view name="header"></router-view>
    <router-view name="default"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
    },
    mounted () {
    }
  }
</script>

<style>

h1, h2, h3, h4, h5, h6, body {
  font-family: 'LT Tofino', 'Roboto', sans-serif;
}

input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {
  border-bottom: 1px solid #e6e6e6;
}

.btn, .btn-large, .btn-floating, .btn-large, .btn-flat {
    font-size: 1rem;
    outline: 0;
    font-size: 12px;
    font-weight: 600;
    padding: 0 15%;
    min-width: 100%;
}

</style>
