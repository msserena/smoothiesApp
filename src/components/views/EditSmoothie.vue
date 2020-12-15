<template>
  <div class="edit-smoothie container">
            <Form v-if="smoothie"
                        :buttonText="'Update'"
                        :pageTitle="'Edit ' + smoothie.title" 
                        :smoothie="smoothie"
                        :message="message"
                        @click="editSmoothie" /> 
    
  </div>
</template>

<script>
import db from '@/firebase/init'
import Form from '../Form'

import slugify from 'slugify'

export default {
  name: 'EditSmoothie',
  data () {
    return {
        smoothie: null,
        message: null
    }
  },

   created(){
    //fetch data from firestore database
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
        snapshot.forEach(doc => {
            this.smoothie = doc.data(),
            this.smoothie.id = doc.id
            console.log(doc.data())
        })
    }) 
  },
  methods:{
      editSmoothie(){
            if(this.smoothie.title){
            this.message= null
            //create slug
            this.smoothie.slug = slugify(this.smoothie.title, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true
            })
            db.collection('smoothies').doc(this.smoothie.id).update({
                title: this.smoothie.title,
                ingredients: this.smoothie.ingredients,
                slug: this.smoothie.slug
            }).then(() => {
                this.$router.push({ name: 'Index'})
            }).catch(err =>{
                console.log(err)
            })
            } else {
                this.message= 'You must enter a title';
            }
      }
      
    },
components: {

    Form: Form
}
}
</script>


<style>


</style>
