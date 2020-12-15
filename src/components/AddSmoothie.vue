<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text"> {{ pageTitle}}</h2>
        <form @submit.prevent="addSmoothie"> 
         <div class="field title">
             <label for="title"> Smoothie Title: </label>
          <input  name="title" type="text" v-model="smoothieTitle">
          
        </div>
        <div class="field" v-for="(ing, index) in ingredients" :key="index">
            <label for="ingredient"> Ingredients: </label>
            <input class="chip" type="text" name="ingredient" v-model="ingredients[index]">
            <i class="material-icons clear" @click="deleteIng(ing)">clear</i>
        </div>
        <div class="field add-ingredients">
          <input  name="add-ingredients" type="text" @keydown.enter.prevent="addIngr" v-model="anotherIng">
          <label for="add-ingredients" >Add Ingredients: </label>
        </div>
       <div class="field center-align">
           <p v-if="message" class="red-text">{{ message }} </p>
          <button class="waves-effect waves-light btn halfway-fab pink lighten-2" > {{  buttonText }}</button>
        </div>   
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    name: 'AddSmoothie',
    data(){
        return {
            
            smoothieTitle: this.title,
            ingredients: this.allIngredients,
            anotherIng: null,
            message: null,
            slug: null
            
        }
    },
    props:{
        buttonText: {
            type: String,
            default: 'Save'
        },
        pageTitle: {
            type:String,
            default: 'Add New Recipe'
        },
        title: {
            type: String,
            default: ''
        },
        allIngredients: {
            type: Array,
            default: () =>[]
        }
    },
    methods:{
      
       addSmoothie(){
            if(this.smoothieTitle){
            this.message= null
            //create slug
            this.slug = slugify(this.smoothieTitle, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true
            })
            db.collection('smoothies').add({
                title: this.smoothieTitle,
                ingredients: this.allIngredients,
                slug: this.slug
            }).then(() => {
                this.$emit('clicked'),
                this.$router.push({ name: 'Index'})
            }).catch(err =>{
                console.log(err)
            })
            } else {
                this.message= 'You must enter a title';
            }
        },
        addIngr(){
            if(this.anotherIng){
                this.ingredients.push(this.anotherIng)
                this.anotherIng = null
                this.message = null
               
            }
                else{
                  this.message = "You must enter an ingredient to make the recipe"
                  console.log(this.message)
                }
            },
            deleteIng(ing){
                this.ingredients = this.ingredients.filter(ingredient => {
                    return ingredient != ing 
                })
            }
        }
    }
    

</script>
<style>

.add-smoothie {
    margin-top: 50px
}

.add-smoothie button {
    margin-top: 50px;
}

.add-smoothie .field {
    margin: 20px auto;
    position: relative;
}

.add-smoothie .clear{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>