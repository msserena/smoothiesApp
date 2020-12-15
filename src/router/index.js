import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import AddSmooth from '@/components/views/AddSmooth'
import EditSmoothie from '@/components/views/EditSmoothie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },

    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    },

    {
      path: '/add-smooth',
      name: 'AddSmooth',
      component: AddSmooth
    }
  ]
})
