<template>
    <div class="p-8 pb-0">
        <input v-model="keyword"
         type="text" id="search-input"
         placeholder="Search For Meals"
         class="rounded border-2 border-gray-200 w-full"
         @change="searchMeals"  />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue';
import store from '../store';
import MealItem from '../components/MealItem.vue';
import {useRoute} from 'vue-router'


const route = useRoute();


const keyword= ref('');
const meals =computed(()=> store.state.searchedMeals)
function searchMeals(){
    store.dispatch('searchMeals',keyword.value)
}


onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})
</script>