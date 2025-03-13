<template>
<div class="flex flex-col p-8">
    <h1 style="font-size: xx-large;">hello, welocme to our restaurant</h1>
    <br/>
    <p>We are honored that you have registered on our website and enjoyed our food.</p>
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