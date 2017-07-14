<template>
  <div class="container">

    <transition name="fadeModal">
        <EditFaq 
            v-if="showModal && admin" 
            v-on:closeModal="toggleModal()" 
            :content="editFaqContent" 
            :mode="editFaqContent.mode" 
        ></EditFaq>
    </transition>

    <div class="col s12 m7">

        <div v-for="faq_group in faq">
            <h5>{{faq_group.group_title}}</h5>
            <ul class="collapsible" data-collapsible="expandable">
                <li v-for="faq_item in faq_group.group_content">
                    <div class="collapsible-header">{{faq_item.item_title}}</div>
                    <div class="collapsible-body">
                        {{faq_item.item_content}}
                        <br v-if="admin"><br v-if="admin">
                        <a class="waves-effect waves-light btn teal accent-4" v-if="admin"  v-on:click.prevent="editFaq(faq_item.item_id)">Editar</a>
                        <a class="waves-effect right waves-light btn red accent-4" v-if="admin" v-on:click.prevent="deleteFaq(faq_item.item_id)">Apagar</a>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>

    <FloatButton 
        v-if="admin" 
        v-on:action="toggleModal()" 
        color="teal accent-4"
        icon="add">
    </FloatButton>

  </div>
</template>


<script>
import FloatButton from "@/components/Shared/FloatButton"
import EditFaq from "@/components/Shared/EditFaq"

export default {
    name: 'faq',
    components: {FloatButton, EditFaq},
    data () {
      return {
            admin: false,
            showModal: false,
            editFaqContent: {
                id: '',
                title: '',
                group: '',
                content: '',
                mode: 'adding'
            },
            delete_data: {}
        }
    },
    computed: {
        faq() {
            return this.$store.state.faq
        }
    },
    methods: {
        toggleModal: function() {
            this.showModal = !this.showModal;
            this.editFaqContent = {
                id: '',
                title: '',
                group: '',
                content: '',
                mode: 'adding'
            }
        },
        editFaq: function(faqId) {
            let faqItem = ''

            var faq = this.$store.state.faq.forEach(function(e) {
                e.group_content.find(function (item) {
                    item.item_id == faqId ? faqItem = item : false 
                    faqItem != '' && faqItem.item_id == item.item_id ? faqItem.group = e.group : false
                })
            })

            if(faqItem !== '') {
                this.editFaqContent.id = faqItem.item_id
                this.editFaqContent.title = faqItem.item_title
                this.editFaqContent.group = faqItem.group
                this.editFaqContent.content = faqItem.item_content
                this.editFaqContent.mode = 'editing'
                this.showModal = true
            }
        },
        deleteFaq: function(faqId) {
            let faqItem = ''

            var faq = this.$store.state.faq.forEach(function(e) {
                e.group_content.find(function (item) {
                    item.item_id == faqId ? faqItem = item : false 
                    faqItem != '' && faqItem.item_id == item.item_id ? faqItem.group = e.group : false
                })
            })

            if(faqItem !== '') {
                this.delete_data.id = faqItem.item_id
                this.delete_data.group = faqItem.group
            }

            this.$store.dispatch('deleteFaq', this.delete_data);
        }
    },
    mounted() {
        $(document).ready(function(){
            console.log($('.collapsible').collapsible());
            $('.collapsible').collapsible();
        });
    },
    created() {
        this.$store.dispatch('getFaq');
        this.admin = this.$store.state.isAdmin
    }
  }
</script>


<style scoped lang="scss">
    .container {
        padding: 15px 0 30px;
    }

    h5 {
        font-size: 14px;
        font-weight: 600;
        margin: 30px 0 15px;
    }
    
    .collapsible-header {
        min-height: 0rem;
        line-height: 1.5rem;
        padding: 15px;
    }
    
</style>
