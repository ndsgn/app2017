<template>
    <ul id="slide-out" class="side-nav">
        <li>
            <div class="userView grey lighten-2">
                <p class="userinfo grey-text text-darken-3"><strong>{{username}}</strong><br>{{useremail}}</p>
                <button v-on:click="logout()" class="waves-effect waves-light btn-flat grey lighten-1 grey-text text-darken-4">SAIR</button>
            </div>
        </li>
        <li><router-link to="/news"><i class="material-icons">info_outline</i>Notícias & Informes</router-link></li>
        <li><router-link to="/program"><i class="material-icons">today</i>Grade de Atividades</router-link></li>
        <li><router-link to="/favs"><i class="material-icons">star</i>Favoritados</router-link></li>
        <li><router-link to="/maps"><i class="material-icons">map</i>Mapa do Alojamento</router-link></li>
        <li><router-link to="/faq"><i class="material-icons">help_outline</i>Perguntas Frequentes</router-link></li>
        <li><router-link to="/phones"><i class="material-icons">call</i>Telefones Importantes</router-link></li>
        <li><a class="subheader">Administração</a></li>
        <li><router-link to="/_adminNews"><i class="material-icons">sms_failed</i>Adicionar notícias</router-link></li>
        <li><router-link to="/_adminActivities"><i class="material-icons">mode_edit</i>Editar atividades</router-link></li>
        <li><router-link to="/_adminMembers"><i class="material-icons">wc</i>Encontristas</router-link></li>
    </ul>
</template>


<script>
export default {
    name: 'sidenav',
    data () {
        return {
        }
    },
    methods: {
        logout: function() {
            this.$router.push({ path: '/' })
        }
    },
    computed: {
        username() {
            return this.$store.state.username;
        },
        useremail() {
            return this.$store.state.useremail;
        }
    }
}
</script>


<style scoped lang="scss">

    p.userinfo {
        line-height: 25px;
        padding-bottom: 5px;

        strong {
            font-weight: 600;
        }
    }
    
    .btn-flat {
        min-width: auto;
    }

    .side-nav li>a.router-link-active {
        font-weight: 700;
    }
</style>
