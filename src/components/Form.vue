<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text"> {{ pageTitle }}</h2>
        <form @submit.prevent="clickedButton"> 
         <div class="field title">
             <label for="title"> Smoothie Title: </label>
          <input  name="title" type="text" v-model="smoothie.title">
          
        </div>
        <div class="field" v-for="(ing, index) in smoothie.ingredients" :key="index">
            <label for="ingredient"> Ingredients: </label>
            <input class="chip" type="text" name="ingredient" v-model="smoothie.ingredients[index]">
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
    name: 'Form',
    data(){
        return {
            
           
            anotherIng: null,
          
            
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
     
        smoothie: {
            type: Object,
            default: () => ({})
        },
        message: {
            type: String,
            default:''
        }
    },
    methods:{
      clickedButton(){
          this.$emit('click', this.smoothie)
      },
      
        addIngr(){
            if(this.anotherIng){
                this.smoothie.ingredients.push(this.anotherIng)
                this.anotherIng = null
                this.message = null
               
            }
                else{
                  this.message = "You must enter an ingredient to make the recipe"
                  console.log(this.message)
                }
            },
            deleteIng(ing){
                this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
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
    color: rgb(3, 3, 3);
    font-size: 1.4em;
    cursor: pointer;
}
</style>