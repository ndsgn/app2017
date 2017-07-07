<template>

    <div class="wrapper-modal">
        <div id="modal2" class="modal modal-fixed-footer open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">
            <div class="modal-content">
                <h4>{{words}} atividade</h4>
                
                <p>Aqui tem um pequeno form para {{words}} uma nova atividade <3</p>
            </div>
            <div class="modal-footer">
                <a class="btn-flat blue darken-2 right white-text">Adicionar</a>
                <a class="btn-flat red darken-4 left white-text" @click="closeModal()">Cancelar</a>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    name: 'modalActivities',
    props: ['mode'],
    data () {
        return {
        }
    },
    methods: {
        closeModal: function() {
            this.$emit('closeModal')
        }
    },
    computed: {
        words() {
            return this.mode == 'adding' ? 'Adicionar' : 'Editar';
        }
    }
}
</script>


<style scoped lang="scss">
    .wrapper-modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
    }

    .modal {
        top: 50px;
        display: block;
    }

    .modal-footer a.btn-flat {
        min-width: auto;
        padding: 0 30px;
        cursor: pointer;
        font-size: 14px;
    }
</style>
