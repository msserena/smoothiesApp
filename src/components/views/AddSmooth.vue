<template>
    <div class="add-smoothie container">
       <Form            :buttonText="'Add'"
                        :pageTitle="'Add a New Recipe '"
                        :smoothie="smoothie"
                        @click="addSmoothie"
                        :message="message" />

      
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import Form from '../Form'

export default {
    name: 'AddSmooth',

    data(){
        return {
            message: null,
            smoothie: {
               title: '',
               ingredients: [],
               slug: ''      
            }
            
        }
    
    },
    components: {
        Form : Form
      
    },
    methods:{
      
       addSmoothie(){
       
            if(this.smoothie.title){
            this.message= null
            //create slug
            this.smoothie.slug = slugify(this.smoothie.title, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true
            })
            db.collection('smoothies').add({
                title: this.smoothie.title,
                ingredients:this.smoothie.ingredients,
                slug: this.smoothie.slug
            }).then(() => {
                this.$router.push({ name: 'Index'})
            }).catch(err =>{
                console.log(err)
            })
            } else {
                this.message = 'You must enter a title';
            }
        }
      
        }
    }
    

</script>
<style>


</style>