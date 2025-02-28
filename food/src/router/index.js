import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../view/Home.vue'
import MealList from '../view/MealList.vue';
import MealsByName from '../view/MealsByName.vue';
import MealsByLetter from '../view/MealsByLetter.vue';
import MealsByIngredient from '../view/MealsByIngredient.vue';
const routes =[{
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
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;