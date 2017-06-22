<template>
  <div class="container">
    <div class="col s12 m7">

        <div v-for="message in news" class="card z-depth-2">
            <div class="card-content">
                <span class="card-subtitle">{{message.subtitle}}</span>
                <span class="card-title">{{message.title}}</span>
                <p>{{message.content}}</p>
            </div>
        </div>

        <p class="center-align grey-text text-lighten-1">:-)</p>
        
    </div>

  </div>
</template>


<script>
  export default {
    name: 'news',
    data () {
      return {
      }
    },
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    created() {
        this.$store.dispatch('getNews');
    }
  }
</script>


<style scoped lang="scss">
    .container {
        padding: 15px 0 30px;
    }

    .card {

        .card-content {
            padding: 15px;
        }

        .card-subtitle {
            font-size: 12px;
            color: #999;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
        }

        .card-title {
            font-size: 14px;
            color: #666;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0;
        }

        p {
            font-weight: 300;
            color: #666;
            font-size: 14px;
        }
    }
</style>
