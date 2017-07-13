<template>

    <div class="wrapper-modal">
        <form v-on:submit.prevent="editFaq()" id="modal2" class="modal modal-fixed-footer open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">
            <div class="modal-content">
                <h4>{{words}} pergunta</h4>
                <div class="row">

                    <input type="hidden" name="activityId" v-model="faq.id" id="activityId" :value="faqId" >

                    <div class="input-field col s12">
                        <input id="title" ref="item_title" name="title" type="text" v-model="faq.title">
                        <label class="active" for="title">Título da pergunta</label>
                    </div>

                    <div class="input-field col s12">
                        <select id="group" ref="group" v-model="faq.group" name="group">
                            <option value="" disabled>Escolha um dos grupos</option>
                            <option v-for="item in group" :key="item.group" :value="item.group">{{item.group_title}}</option>
                        </select>
                        <label>Grupo</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="description" ref="item_content" v-model="faq.content" name="description" class="materialize-textarea" data-length="120"></textarea>
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
    name: 'modalActivities',
    props: ['mode','content', 'faqId'],
    data () {
        return {
            faq: {
                id: '',
                title: '',
                group: '',
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
        editFaq: function() {
            const that = this
            
            this.save_data.id = this.mode == 'adding' ? 0 : this.faq.id
            this.save_data.item_title = this.$refs.item_title.value
            this.save_data.item_content = this.$refs.item_content.value
            this.save_data.group = this.$refs.group.options.selectedIndex
            this.save_data.mode = this.mode

            this.$store.dispatch('editFaq', this.save_data)
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
        this.save_data.previousGroup = this.$refs.group.options.selectedIndex;
        $(document).ready(function() {
            $('select').material_select();
        });
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
