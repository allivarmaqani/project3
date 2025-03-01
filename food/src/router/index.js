import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../view/Home.vue'
import MealsByName from '../view/MealsByName.vue';
import MealsByLetter from '../view/MealsByLetter.vue';
import MealsByIngredient from '../view/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetail from '../view/MealDetail.vue';
const routes =[
  {
    path:'/',
    component:DefaultLayout,
    children:[{
      path:'/',
      name:'home',
      component:Home,
  },
  {
    path:'/by-name/:name?',
    name:'byName',
    component:MealsByName,
  },{
    path:'/by-letter/:letter?',
    name:'byLetter',
    component:MealsByLetter,
  },{
    path:'/by-ingredient/:ingredient?',
    name:'byIngredient',
    component:MealsByIngredient,
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component:MealDetail
  }
 ],
},
{
  path: '/guest',
  component:GuestLayout,
}
];



const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;