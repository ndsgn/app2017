<template>

    <div class="wrapper-modal">
        <form v-on:submit.prevent="editActivity()" id="modal2" class="modal modal-fixed-footer open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;" enctype="multipart/form-data">
            <div class="modal-content">
                <h4>{{words}} atividade</h4>
                <div class="row">

                    <input type="hidden" name="activityId" v-model="activity.id" id="activityId" :value="activityId" >

                    <div class="input-field col s12">
                        <input id="title" name="title" type="text" v-model="activity.title">
                        <label class="active" for="title">Título da atividade</label>
                    </div>

                    <div class="input-field col s6">
                        <select id="hour" v-model="activity.hour" name="hour" v-on:change="alert('lll')">
                            <option value="" disabled>Escolha a hora</option>
                            <option v-for="n in 24" :key="n" :value="n">{{n}}</option>
                        </select>
                        <label>Horário</label>
                    </div>
                    <div class="input-field col s6">
                        <select id="minutes" v-model="activity.minutes" name="minutes">
                            <option value="" disabled>Escolha os minutos</option>
                            <option v-for="n in 6" :key="n" :value="(n - 1)*10">{{(n - 1)*10}}</option>
                        </select>
                        <label>Minutos</label>
                    </div>

                    <div class="input-field col s12">
                        <input id="place" v-model="activity.place" name="place" type="text">
                        <label class="active" for="place">Local</label>
                    </div>

                    <div class="file-field input-field col s12">
                        <div class="col s6" style="position: relative">
                            <div class="btn">
                                <span>Image</span>
                                <input id="activity-image" name="activity-image" type="file">
                            </div>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="description" v-model="activity.description" name="description" class="materialize-textarea" data-length="120"></textarea>
                        <label class="active" for="description">Descrição</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea id="owners" v-model="activity.speakers" name="owners" class="materialize-textarea" data-length="120"></textarea>
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
                hour: '',
                minutes: '',
                place: '',
                image: '',
                description: '',
                speakers: ''
            }
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
            $('#editActivity').submit();
        },
        editActivity: function() {
            this.$store.dispatch('editActivity', this.activity);
        }
    },
    mounted: function() {
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
