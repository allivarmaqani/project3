<template>
<div class="flex flex-col p-8 ">
   <h1 class="text-2xl
     flex justify-center">
    Welcome to our Restaurant
   </h1>
</div>

</template>

<script setup>

import { computed, onMounted,ref} from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const ingredients = ref([])
onMounted(async()=>{
 const response = await  axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
})
</script>