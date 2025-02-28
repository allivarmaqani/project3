<template>
<pre>{{ meals }}</pre>
</template>

<script setup>

import { computed } from 'vue';
import sotre from '../store';

const meals = computed(()=> sotre.state.meals)

</script>