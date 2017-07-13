<template>

    <div class="wrapper-modal">
        <form v-on:submit.prevent="editNews()" id="modal2" class="modal modal-fixed-footer open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">
            <div class="modal-content">
                <h4>{{words}} notícia</h4>
                <div class="row">

                    <input type="hidden" name="activityId" v-model="news.id" id="activityId" :value="newsId" >

                    <div class="input-field col s12">
                        <input id="subtitle" ref="subtitle" name="subtitle" type="text" v-model="news.subtitle">
                        <label class="active" for="subtitle">Título menor</label>
                    </div>
                    
                    <div class="input-field col s12">
                        <input id="title" ref="title" name="title" type="text" v-model="news.title">
                        <label class="active" for="title">Título</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="description" ref="content" v-model="news.content" name="description" class="materialize-textarea" data-length="120"></textarea>
                        <label class="active" for="description">Descrição</label>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <input type="submit" class="btn-flat blue darken-2 right white-text" :value="words">
                <a class="btn-flat red darken-4 left white-text" @click="closeModal()">Cancelar</a>
            </div>
        </form>
    </div>

</template>


<script>

export default {
    name: 'modalNews',
    props: ['mode','content', 'newsId'],
    data () {
        return {
            news: {
                id: '',
                subtitle: '',
                title: '',
                content: ''
            },
            save_data: {}
        }
    },
    computed: {
        words() {
            (this.content && this.content != '') ? this.faq = this.content : ''
            return this.mode == 'adding' ? 'Adicionar' : 'Editar'
        },
        group() {
            return this.$store.state.faq
        }
    },
    methods: {
        closeModal: function() {
            this.$emit('closeModal')
        },
        editNews: function() {
            const that = this
            
            this.save_data.id = this.mode == 'adding' ? 0 : this.news.id
            this.save_data.subtitle = this.$refs.subtitle.value
            this.save_data.title = this.$refs.title.value
            this.save_data.content = this.$refs.content.value
            this.save_data.mode = this.mode

            this.$store.dispatch('editNews', this.save_data)
                .then(function(response) {
                    if (response) {
                        that.closeModal()
                    }
                })
                .catch(function(error) {
                    Materialize.toast('Não conseguimos nos comunicar com o servidor, avise por favor a equipe do app.', 4000)
                })
        }
    },
    mounted: function() {
    },
    created() {
    }
}
</script>


<style scoped lang="scss">
    .wrapper-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
    }

    .modal {
        top: 50px !important;
        display: block;
        max-height: initial;
        height: 80%;
        
        @media only screen and (max-width: 600px) {
            width: 98vw !important;
            height: 90vh !important;
            top: 5% !important;
            max-height: initial !important;
        }
    }

    .modal-footer a.btn-flat, .modal-footer input.btn-flat {
        min-width: auto;
        padding: 0 30px;
        cursor: pointer;
        font-size: 14px;
    }
</style>
