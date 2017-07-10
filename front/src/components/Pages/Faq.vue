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

        <ul class="collection" v-for="faq_group in faq">
            <li class="collection-item collection-item-header">{{faq_group.group_title}}</li>
            <li v-for="faq_item in faq_group.group_content" class="collection-item">
                <span class="collection-item-question">{{faq_item.item_title}}</span>
                <div class="collection-content">
                    {{faq_item.item_content}}
                    <br><br>
                    <a class="waves-effect waves-light btn teal accent-4" v-on:click.prevent="editFaq(faq_item.item_id)">Editar</a>
                    <a class="waves-effect right waves-light btn red accent-4" v-on:click.prevent="deleteFaq(faq_item.item_id)">Apagar</a>
                </div>
            </li>
        </ul>
        
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

    ul.collection {
        width: 96vw;
        margin: 0 auto 2vw;
        position: relative;
        left: -13px;

        @media only screen and (min-width: 660px) {
            width: 90%;
            max-width: 990px;
            margin: 0 auto;
            left: 0;
            margin-bottom: 15px;
        }
        
        li {

            &.collection-item {

                &.collection-item-header {
                    font-size: 14px;
                    font-weight: 600;
                    padding-top: 20px;
                    text-transform: uppercase;
                }

                .collection-content {
                    display: none;
                    padding: 10px 0 8px 0;
                    color: #999;
                    font-size: 14px;
                    line-height: 19px;

                    a.btn {
                        min-width: inherit;
                    }
                }

                &.collection-item-open {

                    .collection-content {
                        display: block;
                    }
                }
            
            }
        }
    }
</style>
