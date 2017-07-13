<template>

    <div class="wrapper-modal">
        <form v-on:submit.prevent="editActivity()" id="modal2" class="modal modal-fixed-footer open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;" enctype="multipart/form-data">
            <div class="modal-content">
                <h4>{{words}} atividade</h4>
                <div class="row">

                    <input type="hidden" name="activityId" v-model="activity.id" id="activityId" ref="activityId" :value="activityId" >

                    <div class="input-field col s12">
                        <input id="title" ref="title" name="title" type="text" v-model="activity.title" @change="saveChange">
                        <label class="active" for="title">Título da atividade</label>
                    </div>

                    <div class="input-field col s4">
                        <input id="date" ref="date" v-model="activity.date" name="date" type="text" @change="saveChange">
                        <label class="active" for="date">Inicio</label>
                    </div>

                    <div class="input-field col s4">
                        <input id="hourStart" ref="hourStart" v-model="activity.hourStart" name="hourStart" type="text" @change="saveChange">
                        <label class="active" for="hourStart">Inicio</label>
                    </div>
                    <div class="input-field col s4">
                        <input id="hourEnd" ref="hourEnd" v-model="activity.hourEnd" name="hourEnd" type="text" @change="saveChange">
                        <label class="active" for="hourEnd">Termino</label>
                    </div>

                    <div class="input-field col s12">
                        <input id="place" ref="place" v-model="activity.place" name="place" type="text" @change="saveChange">
                        <label class="active" for="place">Local</label>
                    </div>

                    <!--<div class="file-field input-field col s12">
                        <div class="col s6" style="position: relative">
                            <div class="btn">
                                <span>Image</span>
                                <input id="activity-image" ref="image" name="activity-image" type="file" @change="onFileChange">
                            </div>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" @change="saveChange">
                        </div>
                    </div>-->

                    <div class="input-field col s12">
                        <input id="type" ref="type" v-model="activity.type" name="type" type="text" @change="saveChange">
                        <label class="active" for="type">Tipo</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="description" ref="description" v-model="activity.description" name="description" class="materialize-textarea" data-length="120" @change="saveChange"></textarea>
                        <label class="active" for="description">Descrição</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="owners" ref="speakers" v-model="activity.speakers" name="owners" class="materialize-textarea" data-length="120" @change="saveChange"></textarea>
                        <label class="active" for="owners">Ministrantes</label>
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
    props: ['mode','content'],
    data () {
        return {
            activity: {
                id: '',
                title: '',
                date: '',
                hourStart: '',
                hourEnd: '',
                place: '',
                type: '',
                image: '',
                description: '',
                speakers: ''
            },
            save_data: {}
        }
    },
    computed: {
        words() {
            (this.content && this.content != '') ? this.activity = this.content : ''
            return this.mode == 'adding' ? 'Adicionar' : 'Editar'
        },
        activityId() {
            this.id = (this.$route.params && this.$route.params.id) ? this.$route.params.id : 0
            return true
        }
    },
    methods: {
        closeModal: function() {
            this.$emit('closeModal')
        },
        submitForm: function() {
            $('#editActivity').submit()
        },
        editActivity: function() {
            const that = this
            this.save_data.id = this.mode == 'adding' ? 0 : this.activity.id
            this.$store.dispatch('editActivity', this.save_data)
                .then(function(response) {
                    if (response) {
                        that.closeModal()
                    }
                })
                .catch(function(error) {
                    Materialize.toast('Não conseguimos nos comunicar com o servidor, avise por favor a equipe do app.', 4000)
                })
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files
            if (!files.length)
                return;
            this.createImage(files[0])
        },
        createImage(file) {
            var image = new Image()
            var reader = new FileReader()
            var that = this
            reader.onload = (e) => {
                that.save_data.image = e.target.result
            };
            reader.readAsDataURL(file)
        },
        saveChange(e) {
            var ref = e.target.id
            this.save_data[ref] = e.target.value
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
