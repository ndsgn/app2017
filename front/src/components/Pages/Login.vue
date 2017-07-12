<template>
    
    <div class="whiteWrapper">
        <div class="container">
      
            <div class="row">
                <figure class="logo valign-wrapper">
                    <img class="responsive-img" src="/static/img/logo.svg" />
                </figure>
                <h1 class="logo-legend center-align">O App oficial!</h1>
            </div>

            <div class="row">
                <div class="col s2">&nbsp;</div>
                <form class="col s8" v-on:submit.prevent="login()">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" ref="email" type="email" class="validate" autocomplete="off">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" ref="password" type="password" class="validate" autocomplete="off">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 center-align">
                            <input type="submit" value="ENTRAR" class="waves-effect waves-light btn-flat grey lighten-3 grey-text text-darken-4">
                            <!--<p class="center-align"><a href="#">Esqueceu sua senha?</a></p>-->
                        </div>
                    </div>
                </form>
            </div>

            <div class="row">
                <div class="col s2">&nbsp;</div>
                <div class="col s8 center-align">
                    <p class="center-align">Ainda não tem conta?</p>
                    <a href="http://inscricoes.ncuritiba2017.com.br/user/cadastrar" target="_blank" class="waves-effect waves-light btn-flat grey lighten-3 grey-text text-darken-4">REGISTRAR</a>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'login',
    data () {
        return {}
    },
    methods: {
        login: function() {

            var useremail = this.$refs.email.value
            var password = this.$refs.password.value

            if(useremail != '' && password != '') {
                var that = this

                $('form').addClass('loading')

                this.$store.dispatch('getUser', {
                    email: useremail,
                    senha: password
                }).then(function(response) {
                    if (response) {
                        that.$router.push('News'); 
                    } else {
                        $('form').removeClass('loading')
                        Materialize.toast('Algo deu errado... seus dados estão corretos?', 4000)
                    }
                })
                .catch(function(error) {
                    $('form').removeClass('loading')
                });
            } else {
                Materialize.toast('Ops, login e senha estão em branco...', 4000)
            }
        }
    }
}
</script>


<style scoped lang="scss">

    .whiteWrapper {
        width: 100%;
        height: 100%;
        background: #fff;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    .logo {
        padding: 15px 0 0;
        height: 20vh;
        justify-content: center;

        img {
            width: 230px;
        }
    }

    form.loading {
        opacity: 0.4;
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
