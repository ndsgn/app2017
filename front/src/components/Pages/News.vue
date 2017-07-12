<template>
  <div class="container">
    <div class="col s12 m7">

        <EditNews 
            v-if="showModal && admin" 
            v-on:closeModal="toggleModal()" 
            :content="editNewsContent" 
            :mode="editNewsContent.mode" 
        ></EditNews>

        <div v-for="message in news" class="card z-depth-1">
            <div class="card-content">
                <span class="card-subtitle">{{message.subtitle}}</span>
                <span class="card-title">{{message.title}}</span>
                <p>{{message.content}}</p>
            </div>
        </div>

        <p class="center-align grey-text text-lighten-1">:-)</p>
        
    </div>

    <FloatButton 
        v-if="admin" 
        v-on:action="toggleModal()" 
        color="amber lighten-3"
        icon="add">
    </FloatButton>

  </div>
</template>


<script>
import FloatButton from "@/components/Shared/FloatButton"
import EditNews from "@/components/Shared/EditNews"

export default {
    name: 'news',
    components: {FloatButton, EditNews},
    data () {
        return {
            admin: false,
            showModal: false,
            editNewsContent: {
                id: '',
                title: '',
                subtitle: '',
                content: '',
                mode: 'adding'
            },
        }
    },
    computed: {
        news() {
            return this.$store.state.news
        }
    },
    methods: {
        toggleModal: function() {
            this.showModal = !this.showModal;
            this.editNewsContent = {
                id: '',
                title: '',
                subtitle: '',
                content: '',
                mode: 'adding'
            }
        },
        editNews: function(newsId) {
            let newsItem = ''
            var news = this.$store.state.news.find(function(item){
                item.id == newsId ? newsItem = item : false
            })

            if(newsItem !== '') {
                this.editNewsContent.id = newsItem.item_id
                this.editNewsContent.title = newsItem.item_title
                this.editNewsContent.subtitle = newsItem.item_subtitle
                this.editNewsContent.content = newsItem.item_content
                this.editNewsContent.mode = 'editing'
                this.showModal = true
            }
        },
    },
    created() {
        this.$store.dispatch('getNews')
        this.admin = this.$store.state.isAdmin
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
